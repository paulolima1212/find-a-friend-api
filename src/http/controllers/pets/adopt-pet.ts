import { makeAdoptPetUseCase } from '@/use-case/factories/make-adopt-pet-use-case'
import { makeFindPetByIdUseCase } from '@/use-case/factories/make-find-pet-by-id-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function adopt(request: FastifyRequest, replay: FastifyReply) {
  const adoptParamsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = adoptParamsSchema.parse(request.params)

  const adoptUseCase = makeAdoptPetUseCase()
  const findPetById = makeFindPetByIdUseCase()

  const existsPet = findPetById.execute({ id })

  if (!existsPet) {
    return replay.status(404).send({ message: 'Pet not found' })
  }

  const pet = adoptUseCase.execute({ id })

  return replay.status(200).send(pet)
}
