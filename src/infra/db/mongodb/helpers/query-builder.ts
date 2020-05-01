export class QueryBuilder {
  private readonly query = []

  match (data: object): QueryBuilder {
    this.query.push({
      $match: data
    })
    return this
  }

  group (data: object): QueryBuilder {
    this.query.push({
      $group: data
    })
    return this
  }

  sort (data: object): QueryBuilder {
    this.query.push({
      $sort: data
    })
    return this
  }

  unwind (data: object): QueryBuilder {
    this.query.push({
      $unwind: data
    })
    return this
  }

  lookup (data: object): QueryBuilder {
    this.query.push({
      $lookup: data
    })
    return this
  }

  project (data: object): QueryBuilder {
    this.query.push({
      $project: data
    })
    return this
  }

  build (): object[] {
    return this.query
  }
}
