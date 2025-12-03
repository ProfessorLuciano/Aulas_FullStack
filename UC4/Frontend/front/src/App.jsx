import React, { useState } from 'react'
import apiLocal from './Api/apiLocal'
import './App.scss'

export default function App() {

  const [dadosFuncionarios, setDadosFuncionarios] = useState([''])
  const [existeDados, setExisteDados] = useState(false)
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  console.log(dadosFuncionarios)

  async function consultarFuncionarios() {
    try {
      const resposta = await apiLocal.get('/VisualizarFuncionarios')
      //console.log(resposta.data)
      setDadosFuncionarios(resposta.data)
      setExisteDados(true)
    } catch (err) {
      console.log(err.response.data.error)
    }
  }

  async function cadastrarFuncionarios(e) {
    e.preventDefault()
    const idHierarquia = '93c79849-54da-4d3c-af7a-aa3bc3c180b5'
    try {
      const resposta = await apiLocal.post('/CadastrarFuncionarios', {
        nome,
        cpf,
        email,
        senha,
        idHierarquia
      })
      setNome('')
      setCpf('')
      setEmail('')
      setSenha('')
      console.log(resposta.data.dados)
    } catch (err) {
      console.log(err.response.data.error)
    }
  }

  async function apagarFuncionarios(id) {
    try {
      const resposta = await apiLocal.delete(`/ApagarFuncionarios/${id}`)
      console.log(resposta.data.dados)
    } catch (err) {
      console.log(err.response.data.error)
    }
  }

  return (
    <>
      <div className='appGeral'>
        <div className='appBotoes'>
          <button onClick={cadastrarFuncionarios}>Cadastrar</button>
          <button onClick={consultarFuncionarios}>Consultar</button>
          <button onClick={apagarFuncionarios}>Apagar</button>
        </div>
        {existeDados === false ? <span><h1>Sem Dados</h1></span> :
          <div className='tabelaGeral'>
            <table className='dadosTabelas'>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>CPF</th>
                  <th>Hierarquia</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
                {dadosFuncionarios.map((item) => {
                  return (
                    <tr>
                      <td>{item.nome}</td>
                      <td>{item.email}</td>
                      <td>{item.cpf}</td>
                      <td></td>
                      <td>{item.status === true ? <span>Ativo</span> : <span>Inativo</span>}</td>
                      <td><button className='button1'>Editar</button> - <button className='button2' onClick={() => apagarFuncionarios(item.id)} >Apagar</button></td>
                    </tr>
                  )
                })}
              </thead>
            </table>
          </div>
        }
        <div className='appFormulario'>
          <h1>Formulario de Cadastro</h1>
          <form>
            <input
              type="text"
              placeholder='Digite Seu Nome'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="text"
              placeholder='Digite Seu CPF'
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <input
              type="text"
              placeholder='Digite Seu E-Mail '
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder='Digite sua Senha'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  )
}


