import { prisma } from '../../lib/prisma.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end()
  }
  try {
    const films = await prisma.film.findMany({ orderBy: { title: 'asc' } })
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    return res.status(200).json(films)
  } catch (e) {
    console.error('films list error', e)
    return res.status(500).json({ error: 'Failed to fetch films' })
  }
}
