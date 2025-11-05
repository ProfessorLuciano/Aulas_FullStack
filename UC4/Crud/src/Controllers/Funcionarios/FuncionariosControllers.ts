import { Request, Response } from 'express'
import { FuncionariosServices } from '../../Services/Funcionarios/FuncionariosServices'

class FuncionariosControllers {
    async cadastrarFuncionarios(req: Request, res: Response) {
        const { nome, email, senha, status, idHierarquia } = req.body
        const enviarDados = new FuncionariosServices()
        const resposta = await enviarDados.cadastrarFuncionarios({
            nome,
            email,
            senha,
            status,
            idHierarquia
        })
        return res.json(resposta)
    }
}
export { FuncionariosControllers }