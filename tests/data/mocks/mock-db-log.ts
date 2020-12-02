import { LogErrorRepository } from '@/data/protocols'

export class LogErrorRepositorySpy implements LogErrorRepository {
  stack: string

  async logError (stack: string): Promise<void> {
    this.stack = stack
  }
}
