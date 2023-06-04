import { makeAuthenticateUseCase } from '@/use-case/factories/make-authenticate-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function authenticated(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authenticatedBodySchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const { email, password } = authenticatedBodySchema.parse(request.body)

  const authenticatedUseCase = makeAuthenticateUseCase()

  const { org } = await authenticatedUseCase.execute({ email, password })

  const token = await reply.jwtSign(
    {},
    {
      sign: {
        sub: org.id,
      },
    }
  )

  return reply.status(200).send({ token })
}
