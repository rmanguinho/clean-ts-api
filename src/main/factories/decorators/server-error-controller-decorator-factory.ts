import { LogMongoRepository } from '@/infra/db'
import { ServerErrorControllerDecorator } from '@/main/decorators'
import { Controller } from '@/presentation/protocols'

export const makeServerErrorControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new ServerErrorControllerDecorator(controller, logMongoRepository)
}
