import { AddSurveyModel } from '../../../../domain/usecases/add-survey'

export interface AddSurveyRepository {
  add (surveyData: AddSurveyModel): Promise<void>
}
