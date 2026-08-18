import prismaClient from '../../Prisma/PrismaClient'

interface CadProdutos {
    nome: string
    preco: string
    quantidade: string
    banner: string
}

class ProdutosServices {
    async cadastrarProdutos({ nome, preco, quantidade, banner }: CadProdutos) {
        await prismaClient.produtos.create({
            data: {
                nome: nome,
                preco: preco,
                quantidade: quantidade,
                banner: banner
            }
        })
        return ({dados: 'Produto Cadastrado com Sucesso'})
    }

}

export { ProdutosServices }