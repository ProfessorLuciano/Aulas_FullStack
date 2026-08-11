
import './App.scss'

export default function App() {

  const array = [{nome: 'luciano', telefone: '11111111'}]
  

  return (
    <>
      <div>
        <h1>Front com API</h1>

        {array.map((item) => {
          return(
            <>
          <p>{item.nome}</p>
          <p>{item.telefone}</p>
            </>
          )
        })}
        
      </div>
    </>
  )
}
