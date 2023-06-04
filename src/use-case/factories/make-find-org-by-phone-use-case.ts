import { PrismaOrgRepository } from '@/repositories/prisma/prisma-org-repository'
import { FindOrgByPhoneUseCase } from '../find-org-by-phone'

export function makeFindOrgByPhoneUseCase() {
  const orgRepository = new PrismaOrgRepository()
  const findByPhone = new FindOrgByPhoneUseCase(orgRepository)

  return findByPhone
}
