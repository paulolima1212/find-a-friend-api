import { Prisma, Org } from '@prisma/client'
import { OrgRepository } from '../org-repository'
import { prisma } from '@/lib/prisma'

export class PrismaOrgRepository implements OrgRepository {
  async find() {
    const orgs = await prisma.org.findMany()

    return orgs
  }

  async create(data: Prisma.OrgCreateInput) {
    const org = await prisma.org.create({
      data,
    })

    return org
  }

  async findByCep(cep: string) {
    const orgs = await prisma.org.findMany({
      where: {
        cep,
      },
    })

    return orgs
  }

  async findByPhone(phone: string) {
    const org = await prisma.org.findUnique({
      where: {
        phone,
      },
    })

    return org
  }
}
