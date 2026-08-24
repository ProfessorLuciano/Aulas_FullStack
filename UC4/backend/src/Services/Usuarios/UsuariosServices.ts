import prismaClient from '../../Prisma/PrismaClient'
import { hash } from 'bcryptjs'

interface CadUsuarios {
    nome: string,
    email: string,
    senha: string,
    telefone: string,
    id_cargos: string
}

interface AltUsuarios {
    id: string
    nome: string
    email: string
    telefone: string
    status: boolean
    id_cargos: string
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, senha, telefone, id_cargos }: CadUsuarios) {

        const emailExiste = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })

        if (emailExiste) {
            throw new Error('E-mail já Cadastrado')
        }

        const senhaHash = await hash(senha, 8)

        await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaHash,
                telefone: telefone,
                id_cargos: id_cargos
            }
        })

        return ({ dados: 'Dados Salvo Com Sucesso' })
    }

    async visualizarDadosGeral() {
        const resposta = await prismaClient.usuarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                status: true
            }
        })
        return resposta
    }

    async visualizarUsuarioUnicoPost(id: string) {
        const resposta = await prismaClient.usuarios.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                status: true
            }
        })
        return resposta
    }

    async visualizarUsuarioUnicoGet(id: string) {
        const resposta = await prismaClient.usuarios.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                status: true
            }
        })
        return resposta
    }

    async alterarUsuarios({ id, nome, email, telefone, status, id_cargos }: AltUsuarios) {

        const idExiste = await prismaClient.usuarios.findFirst({
            where: {
                id: id
            }
        })

        if (!idExiste) {
            throw new Error('Registro não Encontrado')
        }

        await prismaClient.usuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email,
                telefone: telefone,
                status: status,
                id_cargos: id_cargos
            }
        })
        return ({ dados: 'Dados Alterados com Sucesso' })
    }

    async apagarUsuarios(id: string) {

        const idExiste = await prismaClient.usuarios.findFirst({
            where: {
                id: id
            }
        })

        if (!idExiste) {
            throw new Error('Registro não Encontrado')
        }

        await prismaClient.usuarios.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    }

}

export { UsuariosServices }