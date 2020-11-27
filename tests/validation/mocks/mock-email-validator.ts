import { EmailValidator } from '@/validation/protocols'

export class EmailValidatorSpy implements EmailValidator {
  isEmailValid = true
  email: string

  isValid (email: string): boolean {
    this.email = email
    return this.isEmailValid
  }
}
