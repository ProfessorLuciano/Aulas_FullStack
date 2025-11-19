import prismaClient from '../../Prisma/PrismaClient'

interface CadastrarFuncionarios {
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    status: boolean,
    idHierarquia: string
}

class FuncionariosServices {
    async cadastrarFuncionarios({ nome, cpf, email, senha, status, idHierarquia }: CadastrarFuncionarios) {
        const cpfExiste = await prismaClient.funcionarios.findFirst({
            where: {
                OR: [
                    {
                        cpf: cpf
                    },
                    {
                        email: email
                    }
                ]
            }
        })

        if (cpfExiste) {
            throw new Error('Cpf/E-mail Já Cadastrados')
        }

        await prismaClient.funcionarios.create({
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senha,
                status: status,
                idHierarquia: idHierarquia
            }
        })
        return ({ dados: 'Cadastro Efetuado com Sucesso' })
    }

    async visualizarFuncionarios() {
        const resposta = await prismaClient.funcionarios.findMany({
            select: {
                id: true,
                nome: true,
                cpf: true,
                email: true,
                status: true
            }
        })
        return resposta
    }

    async apagarFuncionarios(id: string) {
        const idNaoExiste = await prismaClient.funcionarios.findFirst({
            where:{
                id: id
            }
        })
        if(!idNaoExiste){
            throw new Error('Registro não Encontrado')
        }
        await prismaClient.funcionarios.delete({
            where: {
                id: id
            }
        })
        return ({dados: 'Registro Excluido Com Sucesso'})
    }
}
export { FuncionariosServices }