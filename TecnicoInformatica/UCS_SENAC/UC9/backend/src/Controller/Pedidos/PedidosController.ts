import { Request, Response } from 'express'
import { PedidosServices } from '../../Services/Pedidos/PedidosServices'


class PedidosController {

    async listarPedidos(req: Request, res: Response) {
        const listarPedidos = new PedidosServices()
        const resposta = await listarPedidos.listarPedidos()
        return res.json(resposta)
    }

    async listarPedidosCliente(req: Request, res: Response) {
        const { id } = req.params
        
        const listarPedidosCliente = new PedidosServices()
        const resposta = await listarPedidosCliente.listarPedidosCliente({
            id
        })
        return res.json(resposta)
    }

    async aceitarPedidos(req: Request, res: Response) {
        const { id, status, aceito } = req.body
        const aceitarPedidos = new PedidosServices()
        const resposta = aceitarPedidos.aceitarPedidos({
            id,
            status,
            aceito
        })
        return res.json(resposta)
    }

    async listarProdutosGeral(req: Request, res: Response) {
        const listarProdutosGeral = new PedidosServices()
        const resposta = await listarProdutosGeral.listarProdutosGeral()
        return res.json(resposta)
    }

    async criarPedidos(req: Request, res: Response) {
        const { id_cliente } = req.body
        const criarPedidoServices = new PedidosServices()
        const resposta = await criarPedidoServices.criarPedido({
            id_cliente
        })
        return res.json(resposta)
    }

    async listarProdutosCategoria(req: Request, res: Response) {
        const { id } = req.params
        const listarProdutosCategoria = new PedidosServices()
        const resposta = await listarProdutosCategoria.listarProdutosCategoria({
            id
        })
        return res.json(resposta)
    }

    async criarItensPedido(req: Request, res: Response) {
        const { id_pedido, id_produto, quantidade, valor } = req.body
        const criarItensPedido = new PedidosServices()
        const resposta = await criarItensPedido.criarItensPedido({
            id_pedido,
            id_produto,
            quantidade,
            valor
        })
        return res.json(resposta)
    }

    async apagarItemPedido(req: Request, res: Response) {
        const { id } = req.params
        const apagarItemPedido = new PedidosServices()
        const resposta = await apagarItemPedido.apagarItemPedido({
            id
        })
        return res.json(resposta)
    }

    async somarItensPedido(req: Request, res: Response) {
        const { id } = req.params
        const somarItensPedido = new PedidosServices()
        const resposta = await somarItensPedido.somarItensPedidos({
            id
        })
        return res.json(resposta)
    }

    async listarItensPedido(req: Request, res: Response) {
        const { id } = req.params
        const listarItensPedido = new PedidosServices()
        const resposta = await listarItensPedido.listarItensPedido({
            id
        })
        return res.json(resposta)
    }

    async alterarStatusPedido(req: Request, res: Response) {
        const { n_pedido, status } = req.body
        const alterarStatusPedido = new PedidosServices()
        const resposta = await alterarStatusPedido.alterarStatusPedido({
            n_pedido,
            status
        })
        return res.json(resposta)
    }

    async realizarPedidosBalcao(req: Request, res: Response) {
        const { id, draft, aceito, status, valor_total } = req.body
        const realizarPedidoBalcao = new PedidosServices()
        const resposta = await realizarPedidoBalcao.realizarPedidoBalcao({
            id,
            draft,
            aceito,
            status,
            valor_total
        })
        return res.json(resposta)
    }

    async excluirPedido(req: Request, res: Response) {
        const { id } = req.params
        const excluirPedido = new PedidosServices()
        const resposta = await excluirPedido.excluirPedido({
            id
        })
        return res.json(resposta)
    }
}


export { PedidosController }