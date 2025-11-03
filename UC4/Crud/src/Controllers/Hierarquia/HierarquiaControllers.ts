import { Request, Response } from 'express'

class HierarquiaControllers {
    async cadastrarHierarquia(req: Request, res: Response) {
       // const { nome } = req.body
        console.log(req.body)
    }
}
export { HierarquiaControllers }