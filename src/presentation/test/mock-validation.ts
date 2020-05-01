import { Validation } from '@/presentation/protocols'

export class ValidationSpy implements Validation {
  error: Error = null
  input: any

  validate (input: any): Error {
    this.input = input
    return this.error
  }
}
