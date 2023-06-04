import { OrgRepository } from '@/repositories/org-repository'
import { Org } from '@prisma/client'

interface LoginUseCaseRequest {
  id: string
}

interface LoginUseCaseResponse {
  org: Org | null
}

export class LoginUseCase {
  constructor(private orgRepository: OrgRepository) {}

  async execute({ id }: LoginUseCaseRequest): Promise<LoginUseCaseResponse> {
    const org = await this.orgRepository.findById(id)

    return {
      org,
    }
  }
}
