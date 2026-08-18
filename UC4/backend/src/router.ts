import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

//Importação do Controladores
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers'
import { CargosControllers } from './Controllers/Cargos/CargosControllers'
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers'

const router = Router()

const upload = multer(uploadConfig.upload('./tmp'))

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

//Rotas de Produtos
router.post('/CadastrarProdutos', upload.single('file'), new ProdutosControllers().cadastrarProdutos)


export default router