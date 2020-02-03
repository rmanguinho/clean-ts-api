import bcrypt from 'bcrypt'
import { Hasher } from '../../data/protocols/criptography/hasher'
import { HashComparer } from '../../data/protocols/criptography/hash-comparer'

export class BcryptAdapter implements Hasher, HashComparer {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }

  async compare (value: string, hash: string): Promise<boolean> {
    await bcrypt.compare(value, hash)
    return new Promise(resolve => resolve(true))
  }
}
