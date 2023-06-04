import { PrismaPetRepository } from '@/repositories/prisma/prisma-pet-repository'
import { AdoptPetUseCase } from '../adopt-a-pet'

export function makeAdoptPetUseCase() {
  const petRepository = new PrismaPetRepository()
  const adoptPetUseCase = new AdoptPetUseCase(petRepository)

  return adoptPetUseCase
}
