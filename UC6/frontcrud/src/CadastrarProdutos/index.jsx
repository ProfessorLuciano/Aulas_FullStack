import React, { useContext, useState } from 'react'
import { AutenticadoContexto } from '../Contexts/AuthContexts'
import { Link } from 'react-router-dom'
import apiLocal from '../Api/apiLocal'

export default function CadastrarProdutos() {

    const { verificaToken } = useContext(AutenticadoContexto)
    verificaToken()

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [file, setFile] = useState(null)

    function pegarImagem(e){
        if(!e.target.files){
            return
        }
        const image = e.target.files[0]
        if(image.type === 'image/jpeg' || image.type === 'image/jpg' || image.type === 'image/png'){
            setFile(image)
        }
    }

    async function cadastrarProdutos(e){
        try {
            e.preventDefault()
            const data = new FormData()
            data.append('nome', nome)
            data.append('preco', preco)
            data.append('file', file)
            const resposta = await apiLocal.post('/CadastrarProdutos', 
                data)
            console.log(resposta)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div>
                <h1>Cadastrar Produtos</h1>
                <Link to='/'>Voltar Dashboard</Link>
                <form onSubmit={cadastrarProdutos}>
                    <input
                        type="text"
                        placeholder="Digite o Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Digite o Preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
                    <input
                        type="file"
                        accept='image/jpeg, image/png'
                        onChange={pegarImagem}
                    />
                    <button>Enviar</button>
                </form>

            </div>
        </>
    )
}