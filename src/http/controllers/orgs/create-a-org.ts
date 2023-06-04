import { makeCreateOrgUseCase } from '@/use-case/factories/make-create-org-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, replay: FastifyReply) {
  const createAOrgBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cep: z.string(),
    street: z.string(),
    district: z.string(),
    city: z.string(),
    state: z.string(),
    phone: z.string(),
  })

  const { cep, city, district, email, name, phone, state, street } =
    createAOrgBodySchema.parse(request.body)

  const createAOrg = makeCreateOrgUseCase()

  const org = await createAOrg.execute({
    cep,
    city,
    district,
    email,
    name,
    phone,
    state,
    street,
  })

  return replay.status(201).send(org)
}
