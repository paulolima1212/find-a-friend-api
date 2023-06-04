import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { FindOrgsUseCase } from '../find-orgs'

export function makeFindOrgsUseCase() {
  const orgRepository = new PrismaOrgRepository()
  const findOrgsUseCase = new FindOrgsUseCase(orgRepository)

  return findOrgsUseCase
}
