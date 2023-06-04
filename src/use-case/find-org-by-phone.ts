import { OrgRepository } from '@/repositories/org-repository'
import { Org } from '@prisma/client'

interface FindOrgByPhoneUseCaseRequest {
  phone: string
}

interface FindOrgByPhoneUseCaseResponse {
  org: Org | null
}

export class FindOrgByPhoneUseCase {
  constructor(private orgRepository: OrgRepository) {}

  async execute({
    phone,
  }: FindOrgByPhoneUseCaseRequest): Promise<FindOrgByPhoneUseCaseResponse> {
    const org = await this.orgRepository.findByPhone(phone)

    return { org }
  }
}
