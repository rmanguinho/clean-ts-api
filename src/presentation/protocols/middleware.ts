import { HttpRequest, HttpResponse } from '@/presentation/protocols'

export interface Middleware {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
