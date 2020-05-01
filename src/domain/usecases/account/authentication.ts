export type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth (authenticationParams: AuthenticationParams): Promise<string>
}
