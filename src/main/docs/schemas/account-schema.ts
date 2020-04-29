export const accountSchema = {
  type: 'object',
  properties: {
    accessToken: {
      type: 'string'
    }
  },
  required: ['accessToken']
}
