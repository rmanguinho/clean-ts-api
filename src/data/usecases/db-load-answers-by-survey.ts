import { LoadAnswersBySurvey } from '@/domain/usecases'
import { LoadAnswersBySurveyRepository } from '@/data/protocols'

export class DbLoadAnswersBySurvey implements LoadAnswersBySurvey {
  constructor (private readonly loadAnswersBySurveyRepository: LoadAnswersBySurveyRepository) {}

  async loadAnswers (id: string): Promise<LoadAnswersBySurvey.Result> {
    return this.loadAnswersBySurveyRepository.loadAnswers(id)
  }
}
