import express from 'express'
import setupMiddlewares from './middlewares'

const app = express()
setupMiddlewares(app)
export default app
