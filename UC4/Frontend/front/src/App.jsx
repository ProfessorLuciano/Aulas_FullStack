import apiLocal from './Api/apiLocal'
import './App.scss'

export default function App() {

    async function consultarFuncionarios(){
      const resposta = await apiLocal.get('/VisualizarFuncionarios')
      console.log(resposta.data)
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


