import { prisma } from '../../lib/prisma.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end()
  }
  const { id } = req.query
  if (!id) return res.status(400).json({ error: 'Missing film id' })
  try {
    const film = await prisma.film.findUnique({ where: { id } })
    if (!film) return res.status(404).json({ error: 'Film not found' })
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    return res.status(200).json(film)
  } catch (e) {
    console.error('film get error', e)
    return res.status(500).json({ error: 'Failed to fetch film' })
  }
}
