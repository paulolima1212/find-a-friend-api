import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { FindPetByCityUseCase } from '../find-pets-by-city'

export function makeFindPetsByCityUseCase() {
  const petRepository = new PrismaPetRepository()
  const findPetsByCityUseCase = new FindPetByCityUseCase(petRepository)

  return findPetsByCityUseCase
}
