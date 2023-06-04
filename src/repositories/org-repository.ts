import { Org, Prisma } from '@prisma/client'

export interface OrgRepository {
  create(data: Prisma.OrgCreateInput): Promise<Org>
  find(): Promise<Org[] | null>
  findByPhone(phone: string): Promise<Org | null>
  findByCep(cep: string): Promise<Org[] | null>
}
