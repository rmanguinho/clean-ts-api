import { SurveyModel } from '@/domain/models/survey'

export interface LoadSurveys {
  load: () => Promise<SurveyModel[]>
}
