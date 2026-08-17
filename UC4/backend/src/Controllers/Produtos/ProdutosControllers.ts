import { Request, Response } from 'express'

class ProdutosControllers {
    async cadastrarProdutos(req: Request, res: Response){
        const { nome, preco, quantidade} = req.body
        console.log(nome, preco, quantidade)
    }
}

export { ProdutosControllers }