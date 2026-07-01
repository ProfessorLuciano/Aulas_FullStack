import prismaClient from '../../Prisma/PrismaClient'

class CargosServices {
    async cadastrarCargos(nome: string){
       const resposta = await prismaClient.cargos.create({
        data: {
            nome: nome
        }
       })
       return resposta
    }
}

export { CargosServices }