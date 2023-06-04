import { FastifyInstance } from 'fastify'
import { register } from './create-pet'
import { findByCity } from './find-pets-by-city'
import { findById } from './find-pet-by-id'
import { findByChars } from './find-pets-by-chars'
import { adopt } from './adopt-pet'
import { verifyJWT } from '@/http/middlewares/verify-jwt'

export async function petsRoutes(app: FastifyInstance) {
  app.post('/pets', { onRequest: [verifyJWT] }, register)

  app.put('/pets/:id', adopt)

  app.get('/pets/:city', findByCity)
  app.get('/pets/pet/:id', findById)
  app.post('/pets/by-char', findByChars)
}
