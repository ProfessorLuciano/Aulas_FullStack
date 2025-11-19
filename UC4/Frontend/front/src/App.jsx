import apiLocal from './Api/apiLocal'
import './App.scss'

export default function App() {

    async function consultarFuncionarios(){
      const resposta = await apiLocal.get('/VisualizarFuncionarios')
      console.log(resposta.data)
    }

    async function cadastrarFuncionarios(){
      const nome = 'Luciano Silva'
      const cpf = '11111111113'
      const email = 'lucianosilva@teste.com.br'
      const senha = '123456'
      const status = true
      const idHierarquia = '7d8c0a1c-87c6-4a3a-adda-eca2ea221cd5'

      const resposta = await apiLocal.post('/CadastrarFuncionarios', {})
    }

  return (
    <>
      <div className='appGeral'>
        <button>Cadastrar</button>
        <button onClick={consultarFuncionarios}>Consultar</button>
        <button>Apagar</button>
      </div>
    </>
  )
}


