export class ServerError extends AggregateError {
  constructor (...errors: Error[]) {
    super(errors, 'Internal server error')
    this.name = 'ServerError'
    this.stack = errors.map(error => error.stack).join('\n')
  }
}
