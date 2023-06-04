import { OrgRepository } from '@/repositories/org-repository'
import { Org } from '@prisma/client'

interface CreateAOrgUseCaseRequest {
  name: string
  email: string
  cep: string
  street: string
  district: string
  city: string
  state: string
  phone: string
}

interface CreateAOrgUseCaseResponse {
  org: Org
}

export class CreateAOrgUseCase {
  constructor(private orgRepository: OrgRepository) {}

  async execute({
    cep,
    city,
    district,
    email,
    name,
    phone,
    state,
    street,
  }: CreateAOrgUseCaseRequest): Promise<CreateAOrgUseCaseResponse> {
    const org = await this.orgRepository.create({
      cep,
      city,
      district,
      email,
      name,
      phone,
      state,
      street,
    })

    return { org }
  }
}
