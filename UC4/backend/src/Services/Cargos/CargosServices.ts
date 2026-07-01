import prismaClient from '../../Prisma/PrismaClient'

class CargosServices {
    async cadastrarCargos(nome: string) {
        const resposta = await prismaClient.cargos.create({
            data: {
                nome: nome
            },
            select: {
                id: true,
                nome: true
            }
        })
        return resposta
    }
}

export { CargosServices }