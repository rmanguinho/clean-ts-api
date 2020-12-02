export interface CheckSurveyById {
  checkById: (id: string) => Promise<CheckSurveyById.Result>
}

export namespace CheckSurveyById {
  export type Result = boolean
}
