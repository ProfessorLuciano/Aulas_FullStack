import prismaClient from '../../Prisma/PrismaClient'

interface CadUsuarios {
    nome: string,
    email: string,
    senha: string,
    telefone: string
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, senha, telefone }: CadUsuarios) {
        
        const emailExiste = await prismaClient.usuarios.findFirst({
            where: {
                email: email
            }
        })

        if(emailExiste){
            throw new Error('E-mail já Cadastrado')
        }
        
        await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                senha: senha,
                telefone: telefone
            }
        })

        return ({ dados: 'Dados Salvo Com Sucesso' })
    }

}

export { UsuariosServices }