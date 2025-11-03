import { Router } from 'express'

//Importação do Controladores
import { HierarquiaControllers } from './Controllers/Hierarquia/HierarquiaControllers'

const router = Router()

//Criação da Rotas de EndPoint
router.post('/CadastrarHierarquia', new HierarquiaControllers().cadastrarHierarquia)

export default router