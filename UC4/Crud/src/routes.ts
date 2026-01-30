import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

//Importação do Controladores
import { HierarquiaControllers } from './Controllers/Hierarquia/HierarquiaControllers'
import { FuncionariosControllers } from './Controllers/Funcionarios/FuncionariosControllers'
import { LoginFuncionariosControllers } from './Controllers/LoginFuncionarios/LoginFuncionariosControllers'
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//Criação da Rotas de EndPoint
//Metodos POST
router.post('/CadastrarHierarquia', new HierarquiaControllers().cadastrarHierarquia)
router.post('/CadastrarFuncionarios', new FuncionariosControllers().cadastrarFuncionarios)
router.post('/LoginFuncionarios', new LoginFuncionariosControllers().loginFuncionarios)
router.post('/ConsultaFuncionariosUnico', new FuncionariosControllers().consultaFuncionariosUnico)
router.post('/CadastrarProdutos', upload.single('file'), new ProdutosControllers().cadastrarProdutos)

//Metodos GET
router.get('/VisualizarFuncionarios', new FuncionariosControllers().visualizarFuncionarios)
router.get('/VisualizarProdutos', new ProdutosControllers().visualizarProdutos)

//Metodos PUT
router.put('/AlterarFuncionarios', new FuncionariosControllers().alterarFuncionarios)

//Metodos Delete
router.delete('/ApagarFuncionarios/:id', new FuncionariosControllers().apagarFuncionarios)
export default router