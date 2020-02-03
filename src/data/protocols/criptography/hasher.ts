export interface Hasher {
  hash (value: string): Promise<string>
}
