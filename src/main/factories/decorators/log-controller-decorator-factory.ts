import { LogControllerDecorator } from '@/main/decorators/log-controller-decorator'
import { LogMongoRepository } from '@/infra/db/mongodb/log/log-mongo-repository'
import { Controller } from '@/presentation/protocols'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
