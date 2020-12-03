import { SurveyMongoRepository } from '@/infra/db'
import { LoadAnswersBySurvey } from '@/domain/usecases'
import { DbLoadAnswersBySurvey } from '@/data/usecases'

export const makeDbLoadAnswersBySurvey = (): LoadAnswersBySurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadAnswersBySurvey(surveyMongoRepository)
}
