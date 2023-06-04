import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { FindPetByCharUseCase } from '../find-pet-by-char'

export function makeFindPetsByCharsUseCase() {
  const petRepository = new PrismaPetRepository()
  const findPetsByChar = new FindPetByCharUseCase(petRepository)

  return findPetsByChar
}
