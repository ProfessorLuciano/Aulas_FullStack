
import { createContext, useState } from 'react'
import apiLocal from '../Api/apiLocal'

// eslint-disable-next-line react-refresh/only-export-components
export const AutenticadoContexto = createContext()

export default function AuthProvider({ children }) {

    const [tokenT, setTokenT] = useState(false)
    const [token, setToken] = useState('')

    const autenticado = !!tokenT

    async function logarFuncionarios(email, senha) {
        try {
            const resposta = await apiLocal.post('/LoginFuncionarios', {
                email,
                senha
            })
            localStorage.setItem('@id', JSON.stringify(resposta.data.id))
            localStorage.setItem('@nome', JSON.stringify(resposta.data.nome))
            localStorage.setItem('@email', JSON.stringify(resposta.data.email))
            localStorage.setItem('@token', JSON.stringify(resposta.data.token))
            setTokenT(true)
        } catch (err) {
            console.log(err.response.data.error)
        }
    }


    return (
        <AutenticadoContexto.Provider value={({ logarFuncionarios, autenticado })}>
            {children}
        </AutenticadoContexto.Provider>
    )
}