export const badRequest = {
  description: 'Requisição inválida',
  content: {
    'application/json': {
      schema: {
        $ref: '#/schemas/error'
      }
    }
  }
}
