import { makeAddSurveyValidation, makeServerErrorControllerDecorator, makeDbAddSurvey } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controllers'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeServerErrorControllerDecorator(controller)
}
