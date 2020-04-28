import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import setupSwagger from './config-swagger'
import express from 'express'

const app = express()
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export default app
