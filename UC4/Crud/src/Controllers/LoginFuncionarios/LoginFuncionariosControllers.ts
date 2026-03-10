import { Request, Response } from 'express'
import { LoginFuncionariosServices } from '../../Services/LoginFuncionarios/LoginFuncionariosServices'


class LoginFuncionariosControllers {
    async loginFuncionarios(req: Request, res: Response) {
        const { email, senha } = req.body
        const enviarDados = new LoginFuncionariosServices()
        const resposta = await enviarDados.loginFuncionarios({
            email,
            senha
        })
        return res.json(resposta)
    }

    async verificaToken(req: Request, res: Response){
        const id = req.usuarioId
        const enviarDados = new LoginFuncionariosServices()
        const resposta = await enviarDados.verificaToken(id)
        return res.json(resposta)
    }
}



export { LoginFuncionariosControllers }