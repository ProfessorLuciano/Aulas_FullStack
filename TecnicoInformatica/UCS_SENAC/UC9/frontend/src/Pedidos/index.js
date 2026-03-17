import { useEffect, useState, useContext } from 'react'
import { AuthContexts } from '../Contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import Modal from 'react-modal'
import { toast } from 'react-toastify'
import apiLocal from '../API/apiLocal/api'
import { FiTrash2 } from 'react-icons/fi'
import './estilo.pedidos.scss'

export default function Pedidos() {

    const navigation = useNavigate()

    const { verificaToken, token } = useContext(AuthContexts)
    verificaToken()

    const [clientes, setClientes] = useState([''])
    const [idCliente, setIdCliente] = useState('')
    const [pedidos, setPedidos] = useState([''])
    const [categorias, setCategorias] = useState([''])
    const [produtosCategoria, setProdutosCategoria] = useState([''])

    const [categoriaId, setCategoriaId] = useState('')
    const [idItemProduto, setIdItemProduto] = useState('')
    const [quantidadeF, setQuantidadeF] = useState('')
    const [itensPedido, setItensPedido] = useState([''])
    const [valorTotal, setValorTotal] = useState('')

    const [modalAberto, setModalAberto] = useState(false)

    useEffect(() => {
        try {
            async function listarClientes() {
                const resposta = await apiLocal.get('/ListarClientes', {
                    headers: {
                        Authorization: `${token}`
                    }
                })
                setClientes(resposta.data)
            }
            listarClientes()
        } catch (err) {

        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        try {
            if (!categoriaId) {
                return
            }
            async function lerProdutosCategoria() {
                const resposta = await apiLocal.get(`/ListarProdutosCategoria/${categoriaId}`, {
                    headers: {
                        Authorization: `${token}`
                    }
                })
                setProdutosCategoria(resposta.data)
            }
            lerProdutosCategoria()
        } catch (err) {

        }
        // eslint-disable-next-line
    }, [categoriaId])

    async function abrirModal() {
        if (!idCliente) {
            toast.warning('Escolha um Cliente', {
                toastId: 'toastId'
            })
        }
        try {
            setItensPedido([''])
            const id_cliente = idCliente
            const resposta = await apiLocal.post('/CriarPedidos', {
                id_cliente
            }, {
                headers: {
                    Authorization: `${token}`
                }
            })
            setPedidos(resposta.data)
            if (resposta.data.id) {
                setModalAberto(true)
            }

            async function lerCategorias() {
                const resposta = await apiLocal.get('/ListarCategorias', {
                    headers: {
                        Authorization: `${token}`
                    }
                })
                setCategorias(resposta.data)
            }
            lerCategorias()
        } catch (err) {

        }
    }

    async function fecharModal() {
        try {
            const id = pedidos.id
            const draft = false
            const aceito = true
            const status = 'Confirmado'
            const valor_total = valorTotal
            //const resposta = await apiLocal.put('/RealizarPedidoBalcao', {
            await apiLocal.put('/RealizarPedidoBalcao', {
                id,
                draft,
                aceito,
                status,
                valor_total                
            }, {
                headers: {
                    Authorization: `${token}`
                }
            })
            toast.success('Pedido Realizado com Sucesso', {
                toastId: 'toastId'
            })
            setModalAberto(false)
            navigation('/')
        } catch (err) {
            toast.error('Erro de Conexão', {
                toastId: 'toastId'
            })

        }
    }

    async function handleItemPedido(e) {
        try {
            e.preventDefault()
            if (!categoriaId || !idItemProduto || !quantidadeF) {
                toast.warning('Campos vazios dos Produtos')
                return
            }
            const prodExt = produtosCategoria.filter((item) => item.id === idItemProduto)
            const valor = Number(prodExt.map((item) => item.preco) * quantidadeF)
            const id_pedido = pedidos.id
            const id_produto = idItemProduto
            const quantidade = Number(quantidadeF)

            const resposta = await apiLocal.post('/CriarItensPedido', {
                id_pedido,
                id_produto,
                quantidade,
                valor
            }, {
                headers: {
                    Authorization: `${token}`
                }
            })
            let dados = {
                id: resposta.data.id,
                produto: resposta.data.produtos.nome,
                quantidade: resposta.data.quantidade,
                valor: Number(resposta.data.valor)
            }
            setItensPedido(oldArray => [...oldArray, dados])
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }

    async function handleApagarItem(id) {
        try {
            await apiLocal.delete(`/ApagarItemPedido/${id}`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            setItensPedido(itensPedido.filter((item) => item.id !== id))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        try {
            async function somarItensPedido() {
                const id = pedidos.id
                const resposta = await apiLocal.get(`/SomarItensPedido/${id}`, {
                    headers: {
                        Authorization: `${token}`
                    }
                })
                setValorTotal(resposta.data)
            }
            somarItensPedido()
        } catch (err) {
            console.log(err)
        }
        // eslint-disable-next-line
    }, [itensPedido])

    async function excluirPedido(id) {
        try {
            const resposta = await apiLocal.delete(`/ExcluirPedido/${id}`, {
                headers: {
                    Authorization: `${token}`
                }
            })
            toast.success(resposta.data.dados, {
                toastId: 'toastId'
            })
            setModalAberto(false)
            navigation('/')
        } catch (err) {
            toast.error('Excluia os Itens do Pedido', {
                toastId: 'toastId'
            })
        }
    }

    return (
        <div className='containerPedidos'>
            <h1>Pedidos</h1>
            <select
                value={idCliente}
                onChange={(e) => setIdCliente(e.target.value)}
            >
                <option>Selecine o Cliente...</option>
                {clientes.map((item) => {
                    return (
                        <option value={item.id}>{item.nome}</option>
                    )
                })}
            </select>
            <button className='botaoSelectPedido' onClick={abrirModal}>Criar Pedido</button>

            {pedidos.length !== 1 && (
                <Modal
                    isOpen={modalAberto}
                >
                    <div className='containerModalItensPedidos'>

                        <h1>Ralizar Pedidos</h1>
                        <>
                            <h2>Cliente: {pedidos.clientes.nome}</h2>
                            <h2>Numero do Pedido: {pedidos.n_pedido}</h2>
                            <h1>Itens do Pedido</h1>
                            <form onSubmit={handleItemPedido}>
                                <select
                                    value={categoriaId}
                                    onChange={(e) => setCategoriaId(e.target.value)}
                                >
                                    <option>Selecione a categoria</option>
                                    {categorias.map((item) => {
                                        return (
                                            <option value={item.id}>{item.nome}</option>
                                        )
                                    })}
                                </select>
                                <select
                                    value={idItemProduto}
                                    onChange={(e) => setIdItemProduto(e.target.value)}
                                >
                                    <option>Selecione a Produto</option>
                                    {produtosCategoria.map((item) => {
                                        return (
                                            <option value={item.id}>{item.nome}</option>
                                        )
                                    })}
                                </select>
                                <input
                                    type='number'
                                    placeholder='Quantidade'
                                    value={quantidadeF}
                                    onChange={(e) => setQuantidadeF(e.target.value)}
                                />
                                <button className='botaoAddItem' type='submit'>Adicionar Produto</button>
                            </form>
                            <table className='pedidosItensTabela'>
                                <thead>
                                    <tr key="">
                                        <th>Produto</th>
                                        <th>Quantidade</th>
                                        <th>Valor</th>
                                        <th>Exluir Item</th>
                                    </tr>
                                    {itensPedido.map((item) => {
                                        return (
                                            <>
                                                {item.length !== 0 && (
                                                    <tr key="">
                                                        <td>{item.produto}</td>
                                                        <td>{item.quantidade}</td>
                                                        <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(`${item.valor}`)}</td>
                                                        <td><Link onClick={() => handleApagarItem(item.id)}><FiTrash2 size={35} /></Link></td>
                                                    </tr>
                                                )}
                                            </>
                                        )
                                    })}
                                </thead>
                            </table>
                            {valorTotal !== null && (
                                <h1>Valor Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(`${valorTotal}`)} </h1>
                            )}
                        </>
                        <div className='botoesAcoesPedido'>
                            {itensPedido.length === 1 ?
                                <button className='botaoExcluirPedido' onClick={() => excluirPedido(pedidos.id)} >Excluir Pedidos</button>
                                :
                                <button className='botaoRealizarPedido' onClick={fecharModal}>Realizar Pedido</button>
                            }
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    )
}