import { AddSurvey } from '@/domain/usecases'
import { SurveyMongoRepository } from '@/infra/db'
import { DbAddSurvey } from '@/data/usecases'

export const makeDbAddSurvey = (): AddSurvey => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbAddSurvey(surveyMongoRepository)
}
