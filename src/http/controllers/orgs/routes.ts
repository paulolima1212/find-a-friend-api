import { FastifyInstance } from 'fastify'
import { register } from './create-a-org'
import { find } from './find-orgs'

export async function orgsRoutes(app: FastifyInstance) {
  app.post('/orgs', register)
  app.get('/orgs', find)
}
