import { SaveSurveyResultParams } from '@/domain/usecases'

export interface SaveSurveyResultRepository {
  save: (data: SaveSurveyResultParams) => Promise<void>
}
