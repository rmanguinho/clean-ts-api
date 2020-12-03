export interface LoadAnswersBySurveyRepository {
  loadAnswers: (id: string) => Promise<LoadAnswersBySurveyRepository.Result>
}

export namespace LoadAnswersBySurveyRepository {
  export type Result = string[]
}
