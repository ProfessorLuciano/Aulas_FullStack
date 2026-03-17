import { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import apiLocal from '../API/apiLocal/api'
import { AuthContexts } from '../Contexts/AuthContext'
//import { toast } from 'react-toastify'
import Modal from 'react-modal'
import './cozinha.estilo.scss'

export default function Cozinha() {

    const { verificaToken, token } = useContext(AuthContexts)
    verificaToken()
    const navigation = useNavigate()

    const [pedido, setPedido] = useState([''])
    const [ler, setLer] = useState(false)
    const [terItemPedido, setTerItemPedido] = useState(false)
    const [itemPedido, setItemPedido] = useState([''])
    const [idPedidoModal, setIdPedidoModal] = useState('')
    const [producao, setProducao] = useState(false)

    const [modalAberto, setModalAberto] = useState(false)
    const aceito = (pedido[0])


    useEffect(() => {
        async function lerPedidos() {
            const resposta = await apiLocal.get('/ListarPedidos', {
                headers: {
                    Authorization: `${token}`
                }
            })
            setPedido(resposta.data)
            if (!resposta.data.id) {
                setLer(true)
            } else {
                setLer(false)
            }
        }
        lerPedidos()
        // eslint-disable-next-line
    }, [pedido])


    async function abrirModal(id, np) {
        setProducao(false)
        setIdPedidoModal(np)
        const resposta = await apiLocal.get(`/ListarItensPedidos/${id}`, {
            headers: {
                Authorization: `${token}`
            }
        })
        setItemPedido(resposta.data)

        if (resposta.data.length !== 0) {
            setModalAberto(true)
            setTerItemPedido(true)

            const status = resposta.data.map((item) => item.pedidos.status)
            if(status[0] === 'Em Produção'){
                setProducao(true)
            }
        }
       
    }

    function fecharModal() {
        setLer(false)
        setModalAberto(false)
    }

    if (ler === false) {
        return (
            <div>
                <h1>Carregando</h1>
            </div>
        )
    }

    async function IniciarPedido(n_pedido) {
        try {
            const status = 'Em Produção'
            await apiLocal.put('/AlterarStatusPedido', {
                n_pedido,
                status
            },
                {
                    headers: {
                        Authorization: `${token}`
                    }
                })
            setProducao(true)
        } catch (err) {

        }
    }
    async function FinalizarPedido(n_pedido) {
        try {
            const status = 'Pronto'
            await apiLocal.put('/AlterarStatusPedido', {
                n_pedido,
                status
            },
                {
                    headers: {
                        Authorization: `${token}`
                    }
                })
            setProducao(true)
            setModalAberto(false)
        } catch (err) {

        }
    }


    return (
        <div className='containerCozinha'>
            <h1 className='h1Cozinha'>Atendimento da Cozinha</h1>
            <h1 className='h1Pedidos'>Pedidos</h1>
            <div className='mapProdutos'>
                {pedido.length === 0 || aceito.aceito === false || aceito.aceito === undefined  ?
                    <h1 className='h1SPedidos'>Sem Pedidos</h1>
                    :
                    // eslint-disable-next-line
                    <h1></h1>
                }
                {pedido.map(item => {
                    return (
                        <div>
                            {item.aceito === true && item.status !== 'Pronto' && (
                                <article className='cardProdutos'>
                                    <Link onClick={() => abrirModal(item.id, item.n_pedido)}>{item.n_pedido}</Link>
                                </article>
                            )
                            }
                        </div>
                    )
                })}
                {terItemPedido !== false && (
                    <Modal
                        isOpen={modalAberto}
                    //onRequestClose={fecharModal}
                    >
                        <div className='containerModarItens'>
                            <h1>Itens do Pedido - {idPedidoModal} </h1>
                            <table className='pedidoItensTabela'>
                                <thead>
                                    <tr key="">
                                        <th>Quantidade</th>
                                        <th>Produto</th>
                                    </tr>
                                    {itemPedido.map((itemList) => {
                                        return (
                                            <>
                                                <tr key="">
                                                    <td>{itemList.quantidade}</td>
                                                    <td>{itemList.produtos.nome}</td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                </thead>
                            </table>
                            <div className='botoesAcoesItensPedido'>
                                {producao === false && (
                                    <button className='botaoIniciarPedido' onClick={() => IniciarPedido(idPedidoModal)}>Iniciar Pedido</button>
                                )}
                                <button className='botaoFecharSemFinalizar' onClick={fecharModal}>Fechar Sem Finalizar</button>
                                <button className='botaoFecharFinalizando' onClick={() => FinalizarPedido(idPedidoModal)}>Fechar Finalizando</button>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
            <button className='buttonDashboard' onClick={() => navigation('/')}>Dashboard</button>
        </div>
    )
}