import { useState, useEffect } from 'react'
import './App.scss'
import apiLocal from './Api/apiLocal'

export default function App() {

  const [nome, setNome] = useState('')
  const [cargos, setCargos] = useState([''])

  useEffect(() => {
    async function visualizarCargosGeral() {
      const resposta = await apiLocal.get('/VisualizarCargosGeral')
      setCargos(resposta.data)
    }
    visualizarCargosGeral()
  }, [])

  async function cadastrarCargos() {
    try {
      const itoken = localStorage.getItem('@token')
      const token = JSON.parse(itoken)
      const resposta = await apiLocal.post('/CadastrarCargos', {
        nome
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(resposta)
    } catch (err) {

    }
  }

  async function logarUsuarios() {
    //Cosntantes de Login
    const email = 'lucianosc1@teste.com.br'
    const senha = '123456'
    try {
      const resposta = await apiLocal.post('/LoginUsuarios', {
        email,
        senha
      })
      localStorage.setItem('@token', JSON.stringify(resposta.data.token))
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

  async function consultarUsuarios() {
    try {
      const itoken = localStorage.getItem('@token')
      const token = JSON.parse(itoken)
      const resposta = await apiLocal.get('/VisualizarDadosGeral', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(resposta.data)
    } catch (err) {

    }
  }

  function limparLocalStorage() {
    localStorage.clear()
  }

  return (
    <>
      <div>
        <h1>Front com API</h1>
        <form onSubmit={cadastrarCargos}>
          <input
            type="text"
            placeholder='Digite o Cargo'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button type='submit'>Cadastrar Cargos</button>
        </form>

        <form>
          <select>
            <option value="">Selecione o Cargo</option>
            {cargos.map((item) => {
              return(
                <>
                <option value="">{item.nome}</option>
                </>
              )
            })}
          </select>


          <button type='submit'>Cadastrar Usuários</button>
        </form>


        <button onClick={logarUsuarios}>Logar Usuários</button>
        <button onClick={consultarUsuarios}>Consultar Usuarios</button>
        <button>Consultar Produtos</button>
        <button onClick={limparLocalStorage} >Sair Sistema</button>
      </div>

    </>
  )
}
