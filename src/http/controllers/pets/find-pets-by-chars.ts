import { makeFindPetsByCharsUseCase } from '@/use-case/factories/make-find-pets-by-chars-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function findByChars(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const findByCharsBodySchema = z.object({
    char: z.string().array(),
  })

  const { char } = findByCharsBodySchema.parse(request.body)

  const findByCharsUseCase = makeFindPetsByCharsUseCase()

  const pets = await findByCharsUseCase.execute({ char })

  return reply.status(200).send(pets)
}
