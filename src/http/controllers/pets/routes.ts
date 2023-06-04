import { FastifyInstance } from 'fastify'
import { register } from './create-pet'
import { findByCity } from './find-pets-by-city'
import { findById } from './find-pet-by-id'
import { findByChars } from './find-pets-by-chars'

export async function petsRoutes(app: FastifyInstance) {
  app.post('/:org_id/pets', register)

  app.get('/pets/:city', findByCity)
  app.get('/pets/pet/:id', findById)
  app.get('/pets/by-char', findByChars)
}
