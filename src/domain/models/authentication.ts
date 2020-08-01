import { UserRole } from './account'

export type AuthenticationModel = {
  accessToken: string
  name: string
  role: UserRole
}
