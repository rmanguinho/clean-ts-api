export interface LogErrorRepository {
  log (stack: string): Promise<void>
}
