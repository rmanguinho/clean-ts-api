export interface Decrypter {
  decrypt (token: string): Promise<string>
}
