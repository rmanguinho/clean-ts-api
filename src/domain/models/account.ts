export enum UserRole {
  ADMIN = 'admin',
  USER = 'user'
}

export type AccountModel = {
  id: string
  name: string
  email: string
  password: string
  role: UserRole
}
