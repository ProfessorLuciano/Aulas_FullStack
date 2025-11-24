import { Request, Response } from 'express'
import { FuncionariosServices } from '../../Services/Funcionarios/FuncionariosServices'

class FuncionariosControllers {
    async cadastrarFuncionarios(req: Request, res: Response) {
        const { nome, cpf, email, senha, status, idHierarquia } = req.body
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.cadastrarFuncionarios({
            nome,
            cpf,
            email,
            senha,
            status,
            idHierarquia
        })
        return res.json(resposta)
    }

    async visualizarFuncionarios(req: Request, res: Response) {
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.visualizarFuncionarios()
        return res.json(resposta)
    }

    async alterarFuncionarios(req: Request, res: Response) {
        const { id, nome, cpf, email, status } = req.body
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.alterarFuncionarios({
            id,
            nome,
            cpf,
            email,
            status
        })
        return res.json(resposta)
    }

    async apagarFuncionarios(req: Request, res: Response) {
        const { id } = req.params
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.apagarFuncionarios(id)
        return res.json(resposta)
    }
}
export { FuncionariosControllers }