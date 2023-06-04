import { OrgRepository } from '@/repositories/org-repository'
import { Org } from '@prisma/client'

interface FindOrgsUseCaseResponse {
  orgs: Org[]
}

export class FindOrgsUseCase {
  constructor(private orgsRepository: OrgRepository) {}

  async execute(): Promise<FindOrgsUseCaseResponse> {
    const orgs = await this.orgsRepository.find()

    return { orgs }
  }
}
