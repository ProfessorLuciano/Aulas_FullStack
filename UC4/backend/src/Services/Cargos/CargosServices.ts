import prismaClient from '../../Prisma/PrismaClient'

class CargosServices {
    async cadastrarCargos(nome: string){
        console.log(nome)
    }
}

export { CargosServices }