import { Request, Response } from 'express'

import { UsuariosServices } from '../../Services/Usuarios/UsuariosServices'

class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, senha, telefone, id_cargos } = req.body
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.cadastrarUsuarios({
            nome,
            email,
            senha,
            telefone,
            id_cargos
        })
        return res.json(resposta)
    }

    async visualizarDadosGeral(req: Request, res: Response) {
        const enviarDados = new UsuariosServices()
        const resposta = await enviarDados.visualizarDadosGeral()
        return res.json(resposta)
    }

    async visualizarUsuarioUnicoPost(req: Request, res: Response) {
        const { id } = req.body
        const enviarDados = new UsuariosServices()
        const resposta = await enviarDados.visualizarUsuarioUnicoPost(id)
        return res.json(resposta)
    }
}

export { UsuariosControllers }