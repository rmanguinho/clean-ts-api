import { SurveyModel } from '@/domain/models'

export interface LoadSurveys {
  load: (accountId: string) => Promise<LoadSurveys.Result>
}

export namespace LoadSurveys {
  export type Result = SurveyModel[]
}
