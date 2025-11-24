import { Router } from 'express'

//Importação do Controladores
import { HierarquiaControllers } from './Controllers/Hierarquia/HierarquiaControllers'
import { FuncionariosControllers } from './Controllers/Funcionarios/FuncionariosControllers'

const router = Router()

//Criação da Rotas de EndPoint
//Metodos POST
router.post('/CadastrarHierarquia', new HierarquiaControllers().cadastrarHierarquia)
router.post('/CadastrarFuncionarios', new FuncionariosControllers().cadastrarFuncionarios)

//Metodos GET
router.get('/VisualizarFuncionarios', new FuncionariosControllers().visualizarFuncionarios)

//Metodos PUT
router.put('/AlterarFuncionarios', new FuncionariosControllers().alterarFuncionarios)

//Metodos Delete
router.delete('/ApagarFuncionarios/:id', new FuncionariosControllers().apagarFuncionarios)
export default router