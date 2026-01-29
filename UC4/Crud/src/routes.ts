import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

//Importação do Controladores
import { HierarquiaControllers } from './Controllers/Hierarquia/HierarquiaControllers'
import { FuncionariosControllers } from './Controllers/Funcionarios/FuncionariosControllers'
import { LoginFuncionariosControllers } from './Controllers/LoginFuncionarios/LoginFuncionariosControllers'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//Criação da Rotas de EndPoint
//Metodos POST
router.post('/CadastrarHierarquia', new HierarquiaControllers().cadastrarHierarquia)
router.post('/CadastrarFuncionarios', new FuncionariosControllers().cadastrarFuncionarios)
router.post('/LoginFuncionarios', new LoginFuncionariosControllers().loginFuncionarios)
router.post('/ConsultaFuncionariosUnico', new FuncionariosControllers().consultaFuncionariosUnico)

//Metodos GET
router.get('/VisualizarFuncionarios', new FuncionariosControllers().visualizarFuncionarios)

//Metodos PUT
router.put('/AlterarFuncionarios', new FuncionariosControllers().alterarFuncionarios)

//Metodos Delete
router.delete('/ApagarFuncionarios/:id', new FuncionariosControllers().apagarFuncionarios)
export default router