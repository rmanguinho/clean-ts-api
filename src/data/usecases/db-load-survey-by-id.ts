import { LoadSurveyById } from '@/domain/usecases'
import { SurveyModel } from '@/domain/models'
import { LoadSurveyByIdRepository } from '@/data/protocols'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository) {}

  async loadById (id: string): Promise<SurveyModel> {
    const survey = await this.loadSurveyByIdRepository.loadById(id)
    return survey
  }
}
