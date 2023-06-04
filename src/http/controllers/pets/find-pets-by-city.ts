import { makeFindPetsByCityUseCase } from '@/use-case/factories/make-find-pets-by-city-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findByCity(request: FastifyRequest, reply: FastifyReply) {
  const findByCityParamsSchema = z.object({
    city: z.coerce.string(),
  })

  const { city } = findByCityParamsSchema.parse(request.params)

  const findPetsByCity = makeFindPetsByCityUseCase()

  const pets = await findPetsByCity.execute({ city })

  return reply.status(200).send(pets)
}
