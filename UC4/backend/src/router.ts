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

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Gerenciamento de Usuários
 */

/**
 * @swagger
 * /CadastrarUsuarios:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags: [Usuarios]
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
 *               telefone:
 *                 type: string
 *               id_cargos:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.post('/CadastrarUsuarios', new UsuariosControllers().cadastrarUsuarios)

/**
 * @swagger
 * /VisualizarUsuarioUnicoPost:
 *   post:
 *     summary: Visualiza um usuário específico (via POST)
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.post('/VisualizarUsuarioUnicoPost', estaAutenticado, new UsuariosControllers().visualizarUsuarioUnicoPost)

/**
 * @swagger
 * /AlterarUsuarios:
 *   put:
 *     summary: Altera dados de um usuário
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
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
 *               telefone:
 *                 type: string
 *               status:
 *                 type: boolean
 *               id_cargos:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.put('/AlterarUsuarios', estaAutenticado, new UsuariosControllers().alterarUsuarios)

/**
 * @swagger
 * /VisualizarUsuarioUnicoGet/{id}:
 *   get:
 *     summary: Visualiza um usuário específico pelo ID
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/VisualizarUsuarioUnicoGet/:id', estaAutenticado, new UsuariosControllers().visualizarUsuarioUnicoGet)

/**
 * @swagger
 * /VisualizarDadosGeral:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/VisualizarDadosGeral', estaAutenticado, new UsuariosControllers().visualizarDadosGeral)

/**
 * @swagger
 * /ApagarUsuarios:
 *   delete:
 *     summary: Apaga um usuário
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.delete('/ApagarUsuarios', estaAutenticado, new UsuariosControllers().apagarUsuarios)

/**
 * @swagger
 * /LoginUsuarios:
 *   post:
 *     summary: Realiza login do usuário
 *     tags: [Usuarios]
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
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.post('/LoginUsuarios', new LoginUsuariosControllers().logarUsuarios)

/**
 * @swagger
 * tags:
 *   name: Cargos
 *   description: Gerenciamento de Cargos
 */

/**
 * @swagger
 * /CadastrarCargos:
 *   post:
 *     summary: Cadastra um novo cargo
 *     tags: [Cargos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.post('/CadastrarCargos', new CargosControllers().cadastrarCargos)


router.get('/VisualizarCargosGeral', new CargosControllers().visualizarCargosGeral)

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Gerenciamento de Produtos
 */

/**
 * @swagger
 * /CadastrarProdutos:
 *   post:
 *     summary: Cadastra um novo produto (com upload de imagem)
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
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
 *                 type: string
 *               quantidade:
 *                 type: string
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.post('/CadastrarProdutos', estaAutenticado, upload.single('file'), new ProdutosControllers().cadastrarProdutos)

/**
 * @swagger
 * /VisualizarProdutos:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/VisualizarProdutos', estaAutenticado, new ProdutosControllers().visualizarProdutosGeral)


export default router