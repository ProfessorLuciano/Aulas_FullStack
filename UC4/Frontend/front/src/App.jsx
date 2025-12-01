import React, { useState } from 'react'
import apiLocal from './Api/apiLocal'
import './App.scss'

export default function App() {

  const [dadosFuncionarios, setDadosFuncionarios] = useState([''])
  //console.log(dadosFuncionarios)

  async function consultarFuncionarios() {
    try {
      const resposta = await apiLocal.get('/VisualizarFuncionarios')
      //console.log(resposta.data)
      setDadosFuncionarios(resposta.data)
    } catch (err) {
      console.log(err.response.data.error)
    }
  }

  async function cadastrarFuncionarios() {
    try {
      const nome = 'Luciano custodio'
      const cpf = '11111111112'
      const email = 'lucianocustodio@teste.com.br'
      const senha = '123456'
      const status = true
      const idHierarquia = '93c79849-54da-4d3c-af7a-aa3bc3c180b5'

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
                  <td> {item.nome}</td>
                  <td> {item.email}</td>
                  <td> {item.cpf}</td>
                  <td> </td>
                  <td>{item.status === true ? <span>Ativo</span> : <span>Inativo</span>}</td>
                </tr>
              )
            })}
          </thead>
        </table>
      </div>
    </>
  )
}


