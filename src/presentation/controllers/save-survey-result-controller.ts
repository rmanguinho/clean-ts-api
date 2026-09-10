import { LoadAnswersBySurvey, SaveSurveyResult } from '@/domain/usecases'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, ok } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadAnswersBySurvey: LoadAnswersBySurvey,
    private readonly saveSurveyResult: SaveSurveyResult
  ) {}

  async handle (request: SaveSurveyResultController.Request): Promise<HttpResponse> {
    const { surveyId, answer } = request
    const answers = await this.loadAnswersBySurvey.loadAnswers(surveyId)
    if (!answers.length) {
      return forbidden(new InvalidParamError('surveyId'))
    } else if (!answers.includes(answer)) {
      return forbidden(new InvalidParamError('answer'))
    }
    const surveyResult = await this.saveSurveyResult.save({
      ...request,
      date: new Date()
    })
    return ok(surveyResult)
  }
}

export namespace SaveSurveyResultController {
  export type Request = {
    surveyId: string
    answer: string
    accountId: string
  }
}
