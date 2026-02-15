import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const prisma = new PrismaClient()

async function main() {
  const raw = readFileSync(join(__dirname, '..', 'db.json'), 'utf-8')
  const { films } = JSON.parse(raw)
  if (!films?.length) {
    console.log('No films in db.json')
    return
  }
  for (const f of films) {
    await prisma.film.upsert({
      where: { id: String(f.id) },
      update: { title: f.title, description: f.description, image: f.image },
      create: {
        id: String(f.id),
        title: f.title,
        description: f.description,
        image: f.image,
      },
    })
  }
  console.log(`Seeded ${films.length} films`)
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
