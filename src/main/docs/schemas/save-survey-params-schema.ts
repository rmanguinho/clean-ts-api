export const saveSurveyParamsSchema = {
  type: 'object',
  properties: {
    answer: {
      type: 'string'
    }
  },
  required: ['answer']
}
