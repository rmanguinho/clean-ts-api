export class ServerError extends Error {
  constructor () {
    super('Internal server error')
    this.name = 'ServerError'
  }
}
