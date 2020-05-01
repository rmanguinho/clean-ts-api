import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'
import faker from 'faker'

export const mockSaveSurveyResultParams = (): SaveSurveyResultParams => ({
  accountId: faker.random.uuid(),
  surveyId: faker.random.uuid(),
  answer: faker.random.word(),
  date: faker.date.recent()
})

export const mockSurveyResultModel = (): SurveyResultModel => ({
  surveyId: faker.random.uuid(),
  question: faker.random.words(),
  answers: [{
    answer: faker.random.word(),
    count: faker.random.number({ min: 0, max: 1000 }),
    percent: faker.random.number({ min: 0, max: 100 })
  }, {
    answer: faker.random.word(),
    image: faker.image.imageUrl(),
    count: faker.random.number({ min: 0, max: 1000 }),
    percent: faker.random.number({ min: 0, max: 100 })
  }],
  date: faker.date.recent()
})

export const mockEmptySurveyResultModel = (): SurveyResultModel => ({
  surveyId: faker.random.uuid(),
  question: faker.random.words(),
  answers: [{
    answer: faker.random.word(),
    count: 0,
    percent: 0
  }, {
    answer: faker.random.word(),
    image: faker.image.imageUrl(),
    count: 0,
    percent: 0
  }],
  date: faker.date.recent()
})
