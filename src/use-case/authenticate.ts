import { OrgRepository } from '@/repositories/org-repository'
import { Org } from '@prisma/client'
import { compare } from 'bcryptjs'

interface AuthenticateUseCaseRequest {
  email: string
  password: string
}

interface AuthenticateUseCaseResponse {
  org: Org
}

export class AuthenticateUseCase {
  constructor(private orgRepository: OrgRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const org = await this.orgRepository.findByEmail(email)

    if (!org) {
      throw new Error('Org does not exists')
    }

    const doesPasswordMatch = await compare(password, org.password)

    if (!doesPasswordMatch) {
      throw new Error('Invalid credentials')
    }

    return { org }
  }
}
