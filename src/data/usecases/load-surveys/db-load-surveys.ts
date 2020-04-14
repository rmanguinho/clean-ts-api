import { LoadSurveys } from '../../../domain/usecases/load-surveys'
import { SurveyModel } from '../../../domain/models/survey'
import { LoadSurveysRepository } from '../../protocols/db/survey/load-surveys-repository'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveysRepository.loadAll()
    return surveys
  }
}
