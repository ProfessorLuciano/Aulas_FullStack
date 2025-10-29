import { Request, Response } from 'express'

class HierarquiaControllers {
    async cadastroHierarquia(req: Request, res: Response) {
        const { nome } = req.body
        console.log(nome)
    }
}
export { HierarquiaControllers }