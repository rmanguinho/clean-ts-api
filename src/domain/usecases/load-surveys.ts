import { SurveyModel } from '../models/survey'

export interface LoadSurveys {
  load (): Promise<SurveyModel[]>
}
