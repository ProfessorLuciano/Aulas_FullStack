import { useContext, useState, useEffect } from 'react'
import { AutenticadoContexto } from '../Contexts/AuthContexts'
import { Link } from 'react-router-dom'

export default function Dashboard() {

    const { verificaToken } = useContext(AutenticadoContexto)
    verificaToken()
    const [nome, setNome] = useState('')

    useEffect(() => {
        const nomeT = localStorage.getItem('@nome')
        const nomeP = JSON.parse(nomeT)
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setNome(nomeP)
    }, [])

    function sairSistema() {
        localStorage.clear()
        verificaToken()
    }

    return (
        <>
            <div>
                <h1>Dashboard Funcionários</h1>
                <h1>Seja Bem Vindo {nome.toUpperCase()}</h1>
                <Link to='/CadastrarProdutos'>Cadastrar Produtos</Link><br />
                <button onClick={sairSistema}>Sair</button>
            </div>
           
        </>
    )
}