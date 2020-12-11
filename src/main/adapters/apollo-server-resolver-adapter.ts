import { Controller } from '@/presentation/protocols'

import { UserInputError, AuthenticationError, ForbiddenError, ApolloError } from 'apollo-server-express'

export const adaptResolver = async (controller: Controller, args?: any, context?: any): Promise<any> => {
  const request = {
    ...(args || {}),
    accountId: context?.req?.accountId
  }
  const httpResponse = await controller.handle(request)
  switch (httpResponse.statusCode) {
    case 200:
    case 204: return httpResponse.body
    case 400: throw new UserInputError(httpResponse.body.message)
    case 401: throw new AuthenticationError(httpResponse.body.message)
    case 403: throw new ForbiddenError(httpResponse.body.message)
    default: throw new ApolloError(httpResponse.body.message)
  }
}
