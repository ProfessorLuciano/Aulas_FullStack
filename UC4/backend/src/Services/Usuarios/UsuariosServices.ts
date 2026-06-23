
interface CadUsuarios{
    nome: string,
    email: string,
    senha: string,
    telefone: string
}

class UsuariosServices {
    async cadastrarUsuarios({nome, email, senha, telefone}: CadUsuarios){
        

        return ({dados: 'Dados Salvo Com Sucesso'})
    }  

}

export { UsuariosServices }