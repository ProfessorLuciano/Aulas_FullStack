import { Request, Response } from 'express'

import { UsuariosServices } from '../../Services/Usuarios/UsuariosServices'

class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, senha, telefone } = req.body
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.cadastrarUsuarios({
            nome,
            email,
            senha,
            telefone
        })
        return res.json(resposta)
    }
}

export { UsuariosControllers }