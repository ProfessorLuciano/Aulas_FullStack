import prismaClient from '../../Prisma/PrismaClient'
import { hash } from 'bcryptjs'

interface CadastrarFuncionarios {
    nome: string,
    cpf: string,
    email: string,
    senha: string,
    status: boolean,
    idHierarquia: string
}

interface AlterarFuncionarios{
    id: string,
    nome: string,
    cpf: string,
    email: string,
    status: boolean
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

        const senhaCrypt = await hash(senha, 8)
        await prismaClient.funcionarios.create({
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                senha: senhaCrypt,
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
                status: true,
                hierarquia: {
                    select: {
                        nome: true
                    }
                }
            }
        })
        return resposta
    }

    async consultaFuncionarioUnico(id: string){
        const resposta = await prismaClient.funcionarios.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                email: true,
                cpf: true
            }
        })
        return resposta
    }

    async alterarFuncionarios({id, nome, cpf, email, status}: AlterarFuncionarios){
        await prismaClient.funcionarios.update({
            where:{
                id: id
            },
            data:{
                nome: nome,
                cpf: cpf,
                email: email,
                status: status
            }
        })
        return ({dados: 'Registro Alterado com Sucesso'})
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