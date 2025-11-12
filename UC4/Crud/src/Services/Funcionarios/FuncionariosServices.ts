import prismaClient from '../../Prisma/PrismaClient'

interface CadastrarFuncionarios {
    nome: string,
    email: string,
    senha: string,
    status: boolean,
    idHierarquia: string
}

class FuncionariosServices {
    async cadastrarFuncionarios({nome, email, senha, status, idHierarquia}: CadastrarFuncionarios){
       await prismaClient.funcionarios.create({
            data:{
                nome: nome,
                email: email,
                senha: senha,
                status: status,
                idHierarquia: idHierarquia
            }
       })
       return ({dados: 'Cadastro Efetuado com Sucesso'})
    }

    async visualizarFuncionarios(){
        const resposta = await prismaClient.funcionarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                status: true
            }
        })
        return resposta
    }
}
export { FuncionariosServices }