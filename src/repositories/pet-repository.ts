import { Org, Pet, Prisma } from '@prisma/client'

export interface PetRepository {
  create(data: Prisma.PetUncheckedCreateInput): Promise<Pet>
  adopt(id: string): Promise<Pet>
  findByCity(city: string): Promise<Pet[]>
  findById(id: string): Promise<Pet | null>
  findByChar(chars: string | string[]): Promise<Pet[]>
}
