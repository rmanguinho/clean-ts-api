export interface HashComparer {
  compare (plaitext: string, digest: string): Promise<boolean>
}
