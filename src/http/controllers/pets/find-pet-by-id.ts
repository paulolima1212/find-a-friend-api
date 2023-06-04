import { makeFindPetByIdUseCase } from '@/use-case/factories/make-find-pet-by-id-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findById(request: FastifyRequest, reply: FastifyReply) {
  const findByIdParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = findByIdParamsSchema.parse(request.params)

  const findPetById = makeFindPetByIdUseCase()

  const pet = await findPetById.execute({ id })

  if (!pet) {
    return reply.status(404).send({ message: 'Pet not found' })
  }

  return reply.status(200).send(pet)
}
