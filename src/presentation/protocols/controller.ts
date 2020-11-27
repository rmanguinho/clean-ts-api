import { HttpRequest, HttpResponse } from '@/presentation/protocols'

export interface Controller {
  handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
