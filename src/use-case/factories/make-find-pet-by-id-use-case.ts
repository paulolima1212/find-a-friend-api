import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { FindPetByIdUseCase } from '../find-pet-by-id'

export function makeFindPetByIdUseCase() {
  const petRepository = new PrismaPetRepository()
  const findPetByIdUseCase = new FindPetByIdUseCase(petRepository)

  return findPetByIdUseCase
}
