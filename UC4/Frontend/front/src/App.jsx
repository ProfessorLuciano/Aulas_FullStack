import apiLocal from './Api/apiLocal'
import './App.scss'

export default function App() {

  async function consultarFuncionarios() {
    try {
      const resposta = await apiLocal.get('/VisualizarFuncionarios')
      console.log(resposta.data)
    } catch (err) {
      console.log(err.response.data.error)
    }
  }
  
  async function cadastrarFuncionarios() {
    try {
      const nome = 'Luciano Silva'
      const cpf = '11111111113'
      const email = 'lucianosilva@teste.com.br'
      const senha = '123456'
      const status = true
      const idHierarquia = '7d8c0a1c-87c6-4a3a-adda-eca2ea221cd5'
      
      const resposta = await apiLocal.post('/CadastrarFuncionarios', {
        nome,
        cpf,
        email,
        senha,
        status,
        idHierarquia
      })
      console.log(resposta.data.dados)
    } catch (err) {
      console.log(err.response.data.error)
    }
  }
  
  async function apagarFuncionarios() {
    try {
      const id = '384443f3-1dc2-4e8e-ac5e-019653e57df0'
      const resposta = await apiLocal.delete(`/ApagarFuncionarios/${id}`)
      console.log(resposta.data.dados)
    } catch (err) {
      console.log(err.response.data.error)      
    }
  }

  return (
    <>
      <div className='appGeral'>
        <button onClick={cadastrarFuncionarios}>Cadastrar</button>
        <button onClick={consultarFuncionarios}>Consultar</button>
        <button onClick={apagarFuncionarios}>Apagar</button>
      </div>
    </>
  )
}


