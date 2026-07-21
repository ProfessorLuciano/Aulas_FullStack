import { Router } from 'express'

//Importação do Controladores
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { CargosControllers } from './Controllers/Cargos/CargosControllers'

const router = Router()

//Criação dos EndPoints
//Rotas de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.post('/VisualizarUsuarioUnicoPost', new UsuariosControllers().visualizarUsuarioUnicoPost)

router.get('/VisualizarDadosGeral', new UsuariosControllers().visualizarDadosGeral)

//Rotas de Cargos
router.post('/CadastrarCargos', new CargosControllers().cadastrarCargos)


export default router