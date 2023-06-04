import { OrgRepository } from '@/repositories/org-repository'
import { Org } from '@prisma/client'
import { hash } from 'bcryptjs'

interface CreateAOrgUseCaseRequest {
  name: string
  email: string
  password: string
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
    password,
  }: CreateAOrgUseCaseRequest): Promise<CreateAOrgUseCaseResponse> {
    const passwordHash = await hash(password, 6)

    const org = await this.orgRepository.create({
      cep,
      city,
      district,
      email,
      password: passwordHash,
      name,
      phone,
      state,
      street,
    })

    return { org }
  }
}
