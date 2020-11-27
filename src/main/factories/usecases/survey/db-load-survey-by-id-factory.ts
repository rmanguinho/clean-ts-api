import { SurveyMongoRepository } from '@/infra/db'
import { LoadSurveyById } from '@/domain/usecases'
import { DbLoadSurveyById } from '@/data/usecases'

export const makeDbLoadSurveyById = (): LoadSurveyById => {
  const surveyMongoRepository = new SurveyMongoRepository()
  return new DbLoadSurveyById(surveyMongoRepository)
}
