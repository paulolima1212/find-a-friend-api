import { makeLoginUseCase } from '@/use-case/factories/make-login-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const id = request.user.sub

  const loginUseCase = makeLoginUseCase()

  const { org } = await loginUseCase.execute({ id })

  return reply.status(200).send({
    org: {
      ...org,
      password: undefined,
    },
  })
}
