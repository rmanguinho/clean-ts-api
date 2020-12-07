import setupMiddlewares from './middlewares'
import setupApolloServer from './apollo-server'
import setupRoutes from './routes'
import setupStaticFiles from './static-files'
import setupSwagger from './swagger'

import express from 'express'

const app = express()
setupApolloServer(app)
setupStaticFiles(app)
setupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export default app
