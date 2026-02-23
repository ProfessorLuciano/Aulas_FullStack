import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Cadastro em NODE JS',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes.ts'], 
}

const swaggerSpec = swaggerJsdoc(options)

export { swaggerUi, swaggerSpec }