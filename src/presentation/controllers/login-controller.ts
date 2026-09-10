import { Authentication } from '@/domain/usecases'
import { badRequest, ok, unauthorized } from '@/presentation/helpers'
import { Controller, HttpResponse, Validation } from '@/presentation/protocols'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) {}

  async handle (request: LoginController.Request): Promise<HttpResponse> {
    const error = this.validation.validate(request)
    if (error) {
      return badRequest(error)
    }
    const authenticationModel = await this.authentication.auth(request)
    if (!authenticationModel) {
      return unauthorized()
    }
    return ok(authenticationModel)
  }
}

export namespace LoginController {
  export type Request = {
    email: string
    password: string
  }
}
