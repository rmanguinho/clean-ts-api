import { LogErrorRepository } from '@/data/protocols'
import { ServerErrorControllerDecorator } from '@/main/decorators'
import { ok, serverError } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'
import { throwError } from '@/tests/domain/mocks'
import faker from 'faker'

class ControllerSpy implements Controller {
  params: any
  result = ok(faker.random.word())
  async handle (request: any): Promise<HttpResponse> {
    this.params = request
    return this.result
  }
}
class LogErrorRepositorySpy implements LogErrorRepository {
  params: string
  async logError (error: string): Promise<void> {
    this.params = error
  }
}

type SutTypes = {
  sut: ServerErrorControllerDecorator
  controllerSpy: ControllerSpy
  logErrorRepositorySpy: LogErrorRepositorySpy
}

const makeSut = (): SutTypes => {
  const controllerSpy = new ControllerSpy()
  const logErrorRepositorySpy = new LogErrorRepositorySpy()
  const sut = new ServerErrorControllerDecorator(controllerSpy, logErrorRepositorySpy)
  return {
    sut,
    controllerSpy,
    logErrorRepositorySpy
  }
}

describe('ServerErrorController Decorator', () => {
  test('Should call Controller with correct values', async () => {
    const { controllerSpy, sut } = makeSut()
    const params = faker.lorem.sentences()
    await sut.handle(params)
    expect(controllerSpy.params).toEqual(params)
  })

  test('Should return the Controller\'s return', async () => {
    const { controllerSpy, sut } = makeSut()
    const httpResponse = await sut.handle(faker.lorem.sentences())
    expect(httpResponse).toEqual(controllerSpy.result)
  })

  test('Should return 500 if Controller throws', async () => {
    const { controllerSpy, sut } = makeSut()
    jest.spyOn(controllerSpy,'handle').mockImplementation(throwError)
    const httpResponse = await sut.handle(faker.lorem.sentences())
    expect(httpResponse).toEqual(serverError(new Error()))
  })

  test('Should call LogErrorRepository with correct values', async () => {
    const { sut, logErrorRepositorySpy, controllerSpy } = makeSut()
    const error = new Error()
    error.stack = faker.lorem.sentences()
    jest.spyOn(controllerSpy,'handle').mockImplementation(async (): Promise<HttpResponse> => { throw error })
    const params = faker.lorem.sentences()
    await sut.handle(params)
    expect(logErrorRepositorySpy.params).toEqual(error.stack)
  })

  test('Should return 500 if LogErrorRepository throws', async () => {
    const { logErrorRepositorySpy, controllerSpy, sut } = makeSut()
    jest.spyOn(controllerSpy,'handle').mockImplementation(() => { throw new Error('Controller error') })
    jest.spyOn(logErrorRepositorySpy,'logError').mockImplementation(() => { throw new Error('LogErrorRepository error') })
    const httpResponse = await sut.handle(faker.lorem.sentences())
    expect(httpResponse).toEqual(serverError(new Error('Controller error'), new Error('LogErrorRepository error')))
  })
})
