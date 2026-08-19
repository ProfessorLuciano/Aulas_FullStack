import { Request, Response } from 'express'
import { ProdutosServices } from '../../Services/Produtos/ProdutosServices'

class ProdutosControllers {
    async cadastrarProdutos(req: Request, res: Response){
        const { nome, preco, quantidade} = req.body
        if(!req.file){
            throw new Error('Arquivo com Problemas')
        }else{
            const {originalname, filename: banner} = req.file
            const enviarDados = new ProdutosServices()
            const resposta = await enviarDados.cadastrarProdutos({
                nome,
                preco,
                quantidade,
                banner
            })
            return res.json(resposta)
        }
    }

    async visualizarProdutosGeral(req: Request, res: Response){
        const enviarDados = new ProdutosServices()
        const resposta = await enviarDados.visualizarProdutosGeral()
        return res.json(resposta)
    }
    
}

export { ProdutosControllers }