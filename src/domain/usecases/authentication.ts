export interface Authentication {
  auth (email: string, password: string): Promise<string>
}
