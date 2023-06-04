import { PetRepository } from '@/repositories/pet-repository'
import { Pet } from '@prisma/client'

interface CreatePetUseCaseRequest {
  name: string
  age: number
  type: 'CAT' | 'DOG'
  is_adopted: boolean
  org_id: string
  characteristics: string[]
}

interface CreatePetUseCaseResponse {
  pet: Pet
}

export class CreatePetUseCase {
  constructor(private petRepository: PetRepository) {}

  async execute({
    age,
    is_adopted,
    name,
    type,
    org_id,
    characteristics,
  }: CreatePetUseCaseRequest): Promise<CreatePetUseCaseResponse> {
    const pet = await this.petRepository.create({
      name,
      type,
      is_adopted,
      age,
      org_id,
      characteristics,
    })

    return { pet }
  }
}
