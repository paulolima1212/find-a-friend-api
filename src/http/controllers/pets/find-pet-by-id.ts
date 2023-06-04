import { makeFindPetByIdUseCase } from '@/use-case/factories/make-find-pet-by-id-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findById(request: FastifyRequest, replay: FastifyReply) {
  const findByIdParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = findByIdParamsSchema.parse(request.params)

  const findPetById = makeFindPetByIdUseCase()

  const pet = await findPetById.execute({ id })

  if (!pet) {
    return replay.status(404).send({ message: 'Pet not found' })
  }

  return replay.status(200).send(pet)
}
