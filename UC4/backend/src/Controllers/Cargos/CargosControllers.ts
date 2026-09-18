import { Request, Response } from 'express'

import { CargosServices } from '../../Services/Cargos/CargosServices'

class CargosControllers {
    async cadastrarCargos(req: Request, res: Response) {
        const { nome } = req.body
        console.log(nome)
        const enviarDadosServices = new CargosServices()
        const resposta = await enviarDadosServices.cadastrarCargos(nome)
        return res.json(resposta)
    }

    async visualizarCargosGeral(req: Request, res: Response){
        const enviarDados = new CargosServices()
        const resposta = await enviarDados.visualizarCargosGeral()
        return res.json(resposta)
    }
}

export { CargosControllers }
