import { SurveyResultModel } from '@/domain/models/survey-result'

export interface LoadSurveyResult {
  load: (surveyId: string, accountId: string) => Promise<SurveyResultModel>
}
