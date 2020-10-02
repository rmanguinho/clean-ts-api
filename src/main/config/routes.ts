import { Express, Router } from 'express'
import fg from 'fast-glob'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  fg.sync(`${__dirname}/../routes/**routes.??`).map(async file => (await import(file)).default(router))
}
