import { AddSurveyParams } from '@/domain/usecases'

export interface AddSurveyRepository {
  add: (data: AddSurveyParams) => Promise<void>
}
