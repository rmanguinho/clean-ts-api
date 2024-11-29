import { makeDbAuthentication, makeSignUpValidation, makeServerErrorControllerDecorator, makeDbAddAccount } from '@/main/factories'
import { SignUpController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeServerErrorControllerDecorator(controller)
}
