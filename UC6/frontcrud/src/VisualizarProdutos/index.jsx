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
                                <span>{item.banner}</span><br />
                                <span>{item.nome}</span><br />
                                <span>{item.preco}</span><br />
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}