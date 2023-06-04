import { PetRepository } from '@/repositories/pet-repository'
import { Pet } from '@prisma/client'

interface FindPetByIdUseCaseRequest {
  id: string
}

interface FindPetByIdUseCaseResponse {
  pet: Pet | null
}

export class FindPetByIdUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    id,
  }: FindPetByIdUseCaseRequest): Promise<FindPetByIdUseCaseResponse> {
    const pet = await this.petRepository.findById(id)

    return {
      pet,
    }
  }
}
