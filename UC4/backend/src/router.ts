import { Router } from 'express'

//Importação do Controladores
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'

const router = Router()

//Criação dos EndPoints
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)


export default router