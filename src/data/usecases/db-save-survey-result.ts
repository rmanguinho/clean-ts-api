import { SaveSurveyResult, SaveSurveyResultParams } from '@/domain/usecases'
import { SurveyResultModel } from '@/domain/models'
import { SaveSurveyResultRepository, LoadSurveyResultRepository } from '@/data/protocols'

export class DbSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly saveSurveyResultRepository: SaveSurveyResultRepository,
    private readonly loadSurveyResultRepository: LoadSurveyResultRepository
  ) {}

  async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
    await this.saveSurveyResultRepository.save(data)
    return this.loadSurveyResultRepository.loadBySurveyId(data.surveyId, data.accountId)
  }
}
