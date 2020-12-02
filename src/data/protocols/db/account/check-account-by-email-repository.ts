export interface CheckAccountByEmailRepository {
  checkByEmail: (email: string) => Promise<CheckAccountByEmailRepository.Result>
}

export namespace CheckAccountByEmailRepository {
  export type Result = boolean
}
