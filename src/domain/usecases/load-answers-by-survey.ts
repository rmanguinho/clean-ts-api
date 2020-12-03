export interface LoadAnswersBySurvey {
  loadAnswers: (id: string) => Promise<LoadAnswersBySurvey.Result>
}

export namespace LoadAnswersBySurvey {
  export type Result = string[]
}
