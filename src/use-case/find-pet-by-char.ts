import { PetRepository } from '@/repositories/pet-repository'
import { Pet } from '@prisma/client'

interface FindPetByCharUseCaseRequest {
  char: string | string[]
}

interface FindPetByCharUseCaseResponse {
  pets: Pet[]
}

export class FindPetByCharUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    char,
  }: FindPetByCharUseCaseRequest): Promise<FindPetByCharUseCaseResponse> {
    const pets = await this.petRepository.findByChar(char)

    return { pets }
  }
}
