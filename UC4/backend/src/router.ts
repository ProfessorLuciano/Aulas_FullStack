import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

//Importação do Controladores
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { CargosControllers } from './Controllers/Cargos/CargosControllers'
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers'
import { LoginUsuariosControllers } from './Controllers/LoginUsuarios/LoginUsuariosControllers'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))
import { estaAutenticado } from './Middleware/estaAutenticado'

//Criação dos EndPoints
//Rotas de Usuarios
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)
router.post('/VisualizarUsuarioUnicoPost', estaAutenticado, new UsuariosControllers().visualizarUsuarioUnicoPost)
router.put('/AlterarUsuarios', estaAutenticado, new UsuariosControllers().alterarUsuarios)
router.get('/VisualizarUsuarioUnicoGet/:id', estaAutenticado, new UsuariosControllers().visualizarUsuarioUnicoGet)
router.get('/VisualizarDadosGeral', estaAutenticado, new UsuariosControllers().visualizarDadosGeral)
router.delete('/ApagarUsuarios', estaAutenticado, new UsuariosControllers().apagarUsuarios)
router.post('/LoginUsuarios', new LoginUsuariosControllers().logarUsuarios)

//Rotas de Cargos
router.post('/CadastrarCargos', estaAutenticado, new CargosControllers().cadastrarCargos)

//Rotas de Produtos
router.post('/CadastrarProdutos', estaAutenticado, upload.single('file'), new ProdutosControllers().cadastrarProdutos)
router.get('/VisualizarProdutos', estaAutenticado, new ProdutosControllers().visualizarProdutosGeral)


export default router