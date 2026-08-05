import { Router } from 'express'

//Importação do Controladores
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { CargosControllers } from './Controllers/Cargos/CargosControllers'

const router = Router()

//Criação dos EndPoints
//Rotas de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.post('/VisualizarUsuarioUnicoPost', new UsuariosControllers().visualizarUsuarioUnicoPost)
router.put('/AlterarUsuarios', new UsuariosControllers().alterarUsuarios)
router.get('/VisualizarUsuarioUnicoGet/:id', new UsuariosControllers().visualizarUsuarioUnicoGet)
router.get('/VisualizarDadosGeral', new UsuariosControllers().visualizarDadosGeral)
router.delete('/ApagarUsuarios', new UsuariosControllers().apagarUsuarios)

//Rotas de Cargos
router.post('/CadastrarCargos', new CargosControllers().cadastrarCargos)


export default router