import { PetRepository } from '@/repositories/pet-repository'
import { Pet, Prisma, Org } from '@prisma/client'

interface FindPetByCityUseCaseRequest {
  city: string
}

interface FindPetByCityUseCaseResponse {
  pets: Pet[]
}

export class FindPetByCityUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    city,
  }: FindPetByCityUseCaseRequest): Promise<FindPetByCityUseCaseResponse> {
    const pets = await this.petRepository.findByCity(city)

    return { pets }
  }
}
