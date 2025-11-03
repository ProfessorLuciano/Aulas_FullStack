import { Request, Response } from 'express'
import { HierarquiaServices } from '../../Services/Hierarquia/HierarquiaServices'

class HierarquiaControllers {
    async cadastrarHierarquia(req: Request, res: Response) {
        const { nome } = req.body
        const enviarDados = new HierarquiaServices()
        const resposta = await enviarDados.cadastrarHierarquia({ nome })
        return res.json(resposta)
    }
}
export { HierarquiaControllers }