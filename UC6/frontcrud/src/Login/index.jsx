
import './login.estilo.scss'

export default function Login() {
    return (
        <>
            <div className='conteinrtLoginGeral'>
                <h1>Tela de Login</h1>
                <form >
                    <input
                        placeholder="Digite o E-mail"
                        type="text"
                    />
                    <input
                        placeholder="Digite a Senha"
                        type="password"
                    />
                    <button>Enviar</button>
                </form>
            </div>
        </>
    )
}