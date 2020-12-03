import { LoadSurveys } from '@/domain/usecases'
import { SurveyModel } from '@/domain/models'
import { LoadSurveysRepository } from '@/data/protocols'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (accountId: string): Promise<SurveyModel[]> {
    return this.loadSurveysRepository.loadAll(accountId)
  }
}
