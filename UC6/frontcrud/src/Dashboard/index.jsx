import { useState, useEffect } from 'react'

export default function Dashboard() {
    const [nome, setNome] = useState('')

   useEffect(() => {
     const nomeT = localStorage.getItem('@nome')
     const nomeP = JSON.parse(nomeT)
     // eslint-disable-next-line react-hooks/set-state-in-effect
     setNome(nomeP)
   }, [])

    return (
        <>
            <div>
                <h1>Dashboard Funcionários</h1>
                <h1>Seja Bem Vindo {nome.toUpperCase()}</h1>
            </div>
        </>
    )
}