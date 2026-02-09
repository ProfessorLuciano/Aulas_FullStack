import prismaClient from '../../Prisma/PrismaClient'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface LoginFuncionarios {
    email: string,
    senha: string
}

class LoginFuncionariosServices {
    async loginFuncionarios({ email, senha }: LoginFuncionarios) {
        const emailExiste = await prismaClient.funcionarios.findFirst({
            where: {
                email: email
            }
        })

        if (!emailExiste) {
            throw new Error('Login Incorreto')
        }
        const senhaCrypt = await compare(senha, emailExiste.senha)
        if (!senhaCrypt) {
            throw new Error('Login Incorreto')
        }

        const token = sign({
            id: emailExiste.id,
            nome: emailExiste.nome,
            email: emailExiste.email
        },
            process.env.JWT_SECRETO,
            {
                subject: emailExiste.id,
                expiresIn: '8h'
            }
        )
        return{
            id: emailExiste.id,
            nome: emailExiste.nome,
            email: emailExiste.email,
            token: token
        }
    }
}

export { LoginFuncionariosServices }