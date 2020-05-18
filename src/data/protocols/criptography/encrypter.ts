export interface Encrypter {
  encrypt: (plaintext: string) => Promise<string>
}
