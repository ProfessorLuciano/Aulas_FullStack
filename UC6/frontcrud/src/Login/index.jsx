import { useState } from 'react'
import apiLocal from '../Api/apiLocal'
import './login.estilo.scss'

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function logarBackend(e) {
        try {
            e.preventDefault()
            const resposta = await apiLocal.post('/LoginFuncionarios', {
                email,
                senha
            })
            console.log(resposta)
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