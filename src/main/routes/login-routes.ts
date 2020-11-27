import { adaptRoute } from '@/main/adapters'
import { makeSignUpController, makeLoginController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
  router.post('/login', adaptRoute(makeLoginController()))
}
