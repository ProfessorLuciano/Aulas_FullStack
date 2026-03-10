import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'

// Controladores
import { HierarquiaControllers } from './Controllers/Hierarquia/HierarquiaControllers'
import { FuncionariosControllers } from './Controllers/Funcionarios/FuncionariosControllers'
import { LoginFuncionariosControllers } from './Controllers/LoginFuncionarios/LoginFuncionariosControllers'
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers'

import { estaAutenticado } from './middleware/estaAutenticado'

const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

/**
 * /CadastrarHierarquia:
 *   post:
 *     summary: Cadastrar nova hierarquia
 *     tags:
 *       - Hierarquia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *             required:
 *               - nome
 *     responses:
 *       201:
 *         description: Hierarquia cadastrada com sucesso
 */
router.post('/CadastrarHierarquia', new HierarquiaControllers().cadastrarHierarquia)

/**
 * /CadastrarFuncionarios:
 *   post:
 *     summary: Cadastrar novo funcionário
 *     tags:
 *       - Funcionários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               hierarquiaId:
 *                 type: string
 *             required:
 *               - nome
 *               - email
 *               - senha
 *     responses:
 *       201:
 *         description: Funcionário cadastrado com sucesso
 */
router.post('/CadastrarFuncionarios', new FuncionariosControllers().cadastrarFuncionarios)

/**
 * /LoginFuncionarios:
 *   post:
 *     summary: Login de funcionário
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *             required:
 *               - email
 *               - senha
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       401:
 *         description: Credenciais inválidas
 */
router.post('/LoginFuncionarios', new LoginFuncionariosControllers().loginFuncionarios)

/**
 * /ConsultaFuncionariosUnico:
 *   post:
 *     summary: Consulta funcionário específico
 *     tags:
 *       - Funcionários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: Funcionário encontrado
 */
router.post('/ConsultaFuncionariosUnico', new FuncionariosControllers().consultaFuncionariosUnico)

/**
 * /VisualizarFuncionarios:
 *   get:
 *     summary: Listar todos os funcionários
 *     tags:
 *       - Funcionários
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de funcionários
 */
router.get('/VisualizarFuncionarios', estaAutenticado, new FuncionariosControllers().visualizarFuncionarios)

/**
 * /VisualizarProdutos:
 *   get:
 *     summary: Listar todos os produtos
 *     tags:
 *       - Produtos
 *     responses:
 *       200:
 *         description: Lista de produtos
 */
router.get('/VisualizarProdutos', new ProdutosControllers().visualizarProdutos)

/**
 * /CadastrarProdutos:
 *   post:
 *     summary: Cadastrar novo produto com upload de imagem
 *     tags:
 *       - Produtos
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               file:
 *                 type: string
 *                 format: binary
 *             required:
 *               - nome
 *               - preco
 *               - file
 *     responses:
 *       201:
 *         description: Produto cadastrado com sucesso
 */
router.post('/CadastrarProdutos', upload.single('file'), new ProdutosControllers().cadastrarProdutos)

/**
 * /AlterarFuncionarios:
 *   put:
 *     summary: Alterar dados do funcionário
 *     tags:
 *       - Funcionários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *             required:
 *               - id
 *     responses:
 *       200:
 *         description: Funcionário atualizado com sucesso
 */
router.put('/AlterarFuncionarios', new FuncionariosControllers().alterarFuncionarios)

/**
 * /ApagarFuncionarios/{id}:
 *   delete:
 *     summary: Apagar funcionário por ID
 *     tags:
 *       - Funcionários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Funcionário removido com sucesso
 *       404:
 *         description: Funcionário não encontrado
 */
router.delete('/ApagarFuncionarios/:id', new FuncionariosControllers().apagarFuncionarios)

export default router