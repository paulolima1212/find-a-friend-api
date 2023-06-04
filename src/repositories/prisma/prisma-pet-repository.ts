import { Pet, Prisma } from '@prisma/client'
import { PetRepository } from '../pet-repository'
import { prisma } from '@/lib/prisma'

export class PrismaPetRepository implements PetRepository {
  async create(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({
      data,
    })
    return pet
  }

  async findById(id: string) {
    const pet = await prisma.pet.findUnique({
      where: {
        id,
      },
    })

    return pet
  }

  async findByCity(city: string) {
    const pets = await prisma.pet.findMany({
      where: {
        org: {
          city: {
            contains: city,
            mode: 'insensitive',
          },
        },
      },
    })

    return pets
  }

  async findByChar(chars: string) {
    const pets = await prisma.pet.findMany({
      where: {
        characteristics: {
          has: chars,
        },
      },
    })

    return pets
  }
}
