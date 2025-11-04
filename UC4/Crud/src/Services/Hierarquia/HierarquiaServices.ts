import prismaClient from '../../Prisma/PrismaClient'

interface CadHierarquia {
    nome: string
}

class HierarquiaServices {
    async cadastrarHierarquia({ nome }: CadHierarquia){
        await prismaClient.hierarquia.create({
            data: {
                nome: nome
            }
        })
        return ({dados: 'Cadastro Efetuado com Sucesso'})
    }
}

export { HierarquiaServices }