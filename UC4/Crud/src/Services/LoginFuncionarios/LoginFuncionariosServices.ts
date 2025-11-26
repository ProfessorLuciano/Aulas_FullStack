import prismaClient from '../../Prisma/PrismaClient'
import { compare } from 'bcryptjs'

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
        //console.log(emailExiste)
        if (!emailExiste) {
            throw new Error('Login Incorreto')
        }
        const senhaCrypt = await compare(senha, emailExiste.senha)
        //console.log(senhaCrypt)
        if(senhaCrypt){
            return ({dados: 'Login Efetuado com sucesso'})
        }else{
            throw new Error('Login Incorreto')
        }
    }
}

export { LoginFuncionariosServices }