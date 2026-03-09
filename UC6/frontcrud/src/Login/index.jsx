import { useContext, useState } from 'react'
import { AutenticadoContexto } from '../Contexts/AuthContexts'
import './login.estilo.scss'

export default function Login() {

    const { logarFuncionarios } = useContext(AutenticadoContexto)

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function logarBackend(e) {
        try {
            e.preventDefault()
            await logarFuncionarios(email, senha)

        } catch (err) {
            console.log(err.error)
        }
    }

    return (
        <>
            <div className='conteinrtLoginGeral'>
                <h1>Tela de Login</h1>
                <form onSubmit={logarBackend}>
                    <input
                        placeholder="Digite o E-mail"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Digite a Senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <button>Enviar</button>
                </form>
            </div>
        </>
    )
}