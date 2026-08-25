import prismaClient from '../../Prisma/PrismaClient'
import { compare } from 'bcryptjs'

interface LogarUsuarios {
    email: string,
    senha: string
}

class LogarUsuariosServices {
    async logarUsuarios({ email, senha }: LogarUsuarios) {
        const emailExiste = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })
        if (!emailExiste) {
            throw new Error('Email Incorretos')
        }
        
        const senhaCrypt = await compare(senha, emailExiste.senha)
        if(!senhaCrypt){
            throw new Error('Senha Incorretos')
        }
    }
}

export { LogarUsuariosServices }