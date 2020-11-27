import { SurveyModel } from '@/domain/models'

export interface LoadSurveysRepository {
  loadAll: (accountId: string) => Promise<SurveyModel[]>
}
