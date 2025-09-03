import { Router } from 'express'

//Importação dos Controllers
import { UsuariosControllers } from './Controllers/UsuariosControllers'

const router = Router()

//Criação das Rotas de End Point
router.post('/CadastroUsuarios', new UsuariosControllers().cadastroUsuarios)

export default router