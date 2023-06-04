import { makeCreatePetUseCase } from '@/use-case/factories/make-create-pet-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const createPetBodySchema = z.object({
    name: z.string(),
    age: z.number(),
    type: z.enum(['CAT', 'DOG']),
    is_adopted: z.boolean().default(false),
    characteristics: z.string().array(),
  })

  const { age, is_adopted, name, type, characteristics } =
    createPetBodySchema.parse(request.body)

  const org_id = request.user.sub

  const createPet = makeCreatePetUseCase()

  const pet = await createPet.execute({
    age,
    is_adopted,
    name,
    org_id,
    type,
    characteristics,
  })

  return reply.status(201).send(pet)
}
