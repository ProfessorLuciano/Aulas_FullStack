import React, { useContext, useState, useEffect } from 'react'
import { AutenticadoContexto } from '../Contexts/AuthContexts'
import apiLocal from '../Api/apiLocal'

export default function VisualizarProdutos() {

    const { verificaToken, token } = useContext(AutenticadoContexto)
    verificaToken()

    const [recebeDados, setRecebeDados] = useState([''])

    useEffect(() => {
        async function receberDados() {
            try {
                const resposta = await apiLocal.get('/VisualizarProdutos', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setRecebeDados(resposta.data)
            } catch (err) {
                console.log(err)
            }
        }
        receberDados()
    }, [])

    return (
        <>
            <div>
                <h1>Visualizar Produtos</h1>
                {recebeDados.map((item) => {
                    return (
                        <>
                            <div>
                                <img style={{width: '5rem'}} src={`http://localhost:3333/files/${item.banner}`} alt="" /><br />
                                <span>{item.nome}</span><br />
                                <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</span><br />
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}