import './App.scss'
import apiLocal from './Api/apiLocal'

export default function App() {

  const email = 'lucianosc1@teste.com.br'
  const senha = '1234561'

  async function logarUsuarios() {
    try {
      const resposta = await apiLocal.post('/LoginUsuarios', {
        email,
        senha
      })
      console.log(resposta)
    } catch (err) {
      // 1. O error do Express fica guardado dentro de err.resposta.data
      if (err.response && err.response.data) {

        // Captura o objeto { error: 'Senha Incorretos' } que enviamos no Controller
        const mensagemDoBackend = err.response.data.error

        console.log('Mensagem real do backend:', mensagemDoBackend)
      } else {
        // Caso o backend esteja totalmente caído ou sem internet
        console.log('Erro de conexão:', err.message)
        console.log('Não foi possível conectar ao servidor.')
      }
    }
  }

  return (
    <>
      <div>
        <h1>Front com API</h1>

        <button onClick={logarUsuarios}>Logar</button>
      </div>
    </>
  )
}
