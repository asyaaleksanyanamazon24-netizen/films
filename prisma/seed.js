import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const prisma = new PrismaClient()

async function main() {
  const raw = readFileSync(join(__dirname, '..', 'db.json'), 'utf-8')
  const { films = [], menu = [], news = [] } = JSON.parse(raw)

  if (films?.length) {
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

  if (menu?.length) {
    for (const m of menu) {
      await prisma.menu.upsert({
        where: { id: String(m.id) },
        update: {
          name: m.name,
          weight: Number(m.weight) || 0,
          description: m.description,
          price: Number(m.price) || 0,
          image: m.image,
        },
        create: {
          id: String(m.id),
          name: m.name,
          weight: Number(m.weight) || 0,
          description: m.description,
          price: Number(m.price) || 0,
          image: m.image,
        },
      })
    }
    console.log(`Seeded ${menu.length} menu items`)
  }

  if (news?.length) {
    for (const n of news) {
      await prisma.news.upsert({
        where: { id: String(n.id) },
        update: {
          title: n.title,
          description: n.description,
          date: n.date ?? '',
          image: n.image,
        },
        create: {
          id: String(n.id),
          title: n.title,
          description: n.description,
          date: n.date ?? '',
          image: n.image,
        },
      })
    }
    console.log(`Seeded ${news.length} news`)
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e)
    prisma.$disconnect()
    process.exit(1)
  })
