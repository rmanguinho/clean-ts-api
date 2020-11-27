import { makeLogControllerDecorator, makeDbLoadSurveys } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadSurveysController } from '@/presentation/controllers'

export const makeLoadSurveysController = (): Controller => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogControllerDecorator(controller)
}
