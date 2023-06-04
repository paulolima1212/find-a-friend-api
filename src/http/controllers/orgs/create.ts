import { makeCreateOrgUseCase } from '@/use-case/factories/make-create-org-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeFindOrgByPhoneUseCase } from '@/use-case/factories/make-find-org-by-phone-use-case'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const createAOrgBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cep: z.string(),
    street: z.string(),
    district: z.string(),
    city: z.string(),
    state: z.string(),
    phone: z.string(),
    password: z.string(),
  })

  const { cep, city, district, email, name, phone, state, street, password } =
    createAOrgBodySchema.parse(request.body)

  const createAOrg = makeCreateOrgUseCase()
  const findOrgByPhone = makeFindOrgByPhoneUseCase()

  const { org } = await findOrgByPhone.execute({ phone })

  if (org) {
    return reply
      .status(409)
      .send({ message: 'Org with this phone already exists.' })
  }

  const orgNew = await createAOrg.execute({
    cep,
    city,
    district,
    email,
    name,
    phone,
    state,
    street,
    password,
  })

  return reply.status(201).send(orgNew)
}
