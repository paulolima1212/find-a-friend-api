import { FastifyInstance } from 'fastify'
import { register } from './create'
import { login } from './login'
import { authenticated } from './authenticated'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function orgsRoutes(app: FastifyInstance) {
  app.post('/orgs', register)
  app.post('/orgs/authenticated', authenticated)

  app.get('/orgs/me', { onRequest: [verifyJWT] }, login)
}
