import { SurveyModel } from '@/domain/models/survey'

export type AddSurveyModel = Omit<SurveyModel, 'id'>

export interface AddSurvey {
  add (data: AddSurveyModel): Promise<void>
}
