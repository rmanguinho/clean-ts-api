export type SurveyModel = {
  id: string
  question: string
  answers: SurveyAnswerModel[]
  date: Date
  didAnswer?: boolean
}

type SurveyAnswerModel = {
  image?: string
  answer: string
}
