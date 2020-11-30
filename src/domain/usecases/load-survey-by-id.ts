import { SurveyModel } from '@/domain/models'

export interface LoadSurveyById {
  loadById: (id: string) => Promise<SurveyModel>
}
