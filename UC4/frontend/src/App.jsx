import { useState, useEffect } from 'react'
import './App.scss'
import apiLocal from './Api/apiLocal'

export default function App() {

  const [nomeCargos, setNomeCargos] = useState('')
  const [cargos, setCargos] = useState([''])

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [telefone, setTelefone] = useState('')
  const [id_cargos, setIdCargos] = useState('')

  const [usuarios, setUsuarios] = useState([''])

  useEffect(() => {
    async function visualizarCargosGeral() {
      const resposta = await apiLocal.get('/VisualizarCargosGeral')
      setCargos(resposta.data)
    }
    visualizarCargosGeral()
  }, [])

  async function cadastrarCargos() {
    const nome = nomeCargos
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
    const email = 'luciano@teste.com.br'
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
      setUsuarios(resposta.data)
    } catch (err) {

    }
  }

  function limparLocalStorage() {
    localStorage.clear()
  }

  async function cadastrarUsuarios(e) {
    e.preventDefault()
    try {
      const resposta = await apiLocal.post('/CadastrarUsuarios', {
        nome,
        email,
        senha,
        telefone,
        id_cargos
      })
      console.log(resposta)
    } catch (err) {

    }
  }

  return (
    <>
      <div>
        <h1>Front com API</h1>
        <form onSubmit={cadastrarCargos}>
          <input
            type="text"
            placeholder='Digite o Cargo'
            value={nomeCargos}
            onChange={(e) => setNomeCargos(e.target.value)}
          />
          <button type='submit'>Cadastrar Cargos</button>
        </form>

        <form onSubmit={cadastrarUsuarios}>
          <select
            value={id_cargos}
            onChange={(e) => setIdCargos(e.target.value)}
          >
            <option value="">Selecione o Cargo</option>
            {cargos.map((item) => {
              return (
                <>
                  <option value={item.id}>{item.nome}</option>
                </>
              )
            })}
          </select>
          <input
            type="text"
            placeholder='Digite o Nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder='Digite o Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Digite a Senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            type="text"
            placeholder='Digite o Telefone'
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
          <button type='submit'>Cadastrar Usuários</button>
        </form>


        <button onClick={logarUsuarios}>Logar Usuários</button>
        <button onClick={consultarUsuarios}>Consultar Usuarios</button>
        <button>Consultar Produtos</button>
        <button onClick={limparLocalStorage} >Sair Sistema</button>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Ação</th>
            </tr>
            {usuarios.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.nome}</td>
                    <td>{item.email}</td>
                    <td>{item.telefone}</td>
                    <td>Editar</td>
                  </tr>
                </>
              )
            })}
          </thead>
        </table>
      </div>

    </>
  )
}
