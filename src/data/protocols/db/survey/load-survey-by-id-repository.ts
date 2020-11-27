import { SurveyModel } from '@/domain/models'

export interface LoadSurveyByIdRepository {
  loadById: (id: string) => Promise<SurveyModel>
}
