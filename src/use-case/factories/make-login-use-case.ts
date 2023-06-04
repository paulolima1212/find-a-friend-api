import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { LoginUseCase } from '../login'

export function makeLoginUseCase() {
  const orgRepository = new PrismaOrgRepository()
  const loginUseCase = new LoginUseCase(orgRepository)

  return loginUseCase
}
