import { makeFindOrgsUseCase } from '@/use-case/factories/make-find-orgs-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function find(request: FastifyRequest, replay: FastifyReply) {
  const findOrgs = makeFindOrgsUseCase()

  const { orgs } = await findOrgs.execute()

  return replay.status(200).send(orgs)
}
