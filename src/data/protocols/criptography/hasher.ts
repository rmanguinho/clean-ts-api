export interface Hasher {
  hash (plaintext: string): Promise<string>
}
