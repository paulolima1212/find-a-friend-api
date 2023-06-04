import { PetRepository } from '@/repositories/pet-repository'
import { Pet } from '@prisma/client'

interface AdoptPetUseCaseRequest {
  id: string
}

interface AdoptPetUseCaseResponse {
  pet: Pet
}

export class AdoptPetUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    id,
  }: AdoptPetUseCaseRequest): Promise<AdoptPetUseCaseResponse> {
    const pet = await this.petRepository.adopt(id)

    return { pet }
  }
}
