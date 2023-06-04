import { makeCreatePetUseCase } from '@/use-case/factories/make-create-pet-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, replay: FastifyReply) {
  const createPetBodySchema = z.object({
    name: z.string(),
    age: z.number(),
    type: z.enum(['CAT', 'DOG']),
    is_adopted: z.boolean().default(false),
    characteristics: z.string().array(),
  })

  const createPetParamsSchema = z.object({
    org_id: z.string().uuid(),
  })

  const { age, is_adopted, name, type, characteristics } =
    createPetBodySchema.parse(request.body)

  const { org_id } = createPetParamsSchema.parse(request.params)

  const createPet = makeCreatePetUseCase()

  const pet = await createPet.execute({
    age,
    is_adopted,
    name,
    org_id,
    type,
    characteristics,
  })

  return replay.status(201).send(pet)
}
