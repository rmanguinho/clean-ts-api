import { HttpResponse } from '@/presentation/protocols'

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}
