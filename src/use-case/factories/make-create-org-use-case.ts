import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { CreateAOrgUseCase } from '../create-a-org'

export function makeCreateOrgUseCase() {
  const orgRepository = new PrismaOrgRepository()
  const createOrgUseCase = new CreateAOrgUseCase(orgRepository)

  return createOrgUseCase
}
