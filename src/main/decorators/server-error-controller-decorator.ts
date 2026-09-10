import { Controller, HttpResponse } from '@/presentation/protocols'
import { LogErrorRepository } from '@/data/protocols'
import { serverError } from '../../presentation/helpers'
import { ServerError } from '../../presentation/errors'

export class ServerErrorControllerDecorator implements Controller {
  constructor (
    private readonly controller: Controller,
    private readonly logErrorRepository: LogErrorRepository
  ) {}

  async handle (request: any): Promise<HttpResponse> {
    let httpResponse: HttpResponse
    try {
      httpResponse = await this.controller.handle(request)
    } catch (controllerError) {
      const finalError = [controllerError]
      try {
        await this.logErrorRepository.logError(controllerError.stack)
      } catch (logError) {
        finalError.push(logError)
      }
      return serverError(new ServerError(...finalError))
    }
    return httpResponse
  }
}
