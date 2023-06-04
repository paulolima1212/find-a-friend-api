import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import cors from '@fastify/cors'
import fastifyCookie from '@fastify/cookie'

import { ZodError } from 'zod'

import { env } from './env'
import fastifyMultipart from '@fastify/multipart'
import { orgsRoutes } from './http/controllers/orgs/routes'
import { find } from './http/controllers/orgs/find'
import { petsRoutes } from './http/controllers/pets/routes'

export const app = fastify()

app.register(fastifyMultipart, {
  limits: {
    fileSize: 5_896_896,
  },
})
app.register(cors, {
  origin: true,
})
app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '10m',
  },
  cookie: {
    cookieName: 'refreshToken',
    signed: false,
  },
})
app.register(fastifyCookie)

app.register(orgsRoutes)
app.register(petsRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  }

  return reply.status(500).send({
    message: 'Internal server error.',
  })
})
