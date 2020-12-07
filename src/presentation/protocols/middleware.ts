import { HttpResponse } from '@/presentation/protocols'

export interface Middleware<T = any> {
  handle: (httpRequest: T) => Promise<HttpResponse>
}
