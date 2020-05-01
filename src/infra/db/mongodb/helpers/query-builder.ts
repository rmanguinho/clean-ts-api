export class QueryBuilder {
  private readonly query = []

  private addStep (step: string, data: object): QueryBuilder {
    this.query.push({
      [step]: data
    })
    return this
  }

  match (data: object): QueryBuilder {
    return this.addStep('$match', data)
  }

  group (data: object): QueryBuilder {
    return this.addStep('$group', data)
  }

  sort (data: object): QueryBuilder {
    return this.addStep('$sort', data)
  }

  unwind (data: object): QueryBuilder {
    return this.addStep('$unwind', data)
  }

  lookup (data: object): QueryBuilder {
    return this.addStep('$lookup', data)
  }

  project (data: object): QueryBuilder {
    return this.addStep('$project', data)
  }

  build (): object[] {
    return this.query
  }
}
