import { prisma } from '../../lib/prisma.js'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end()
  }
  try {
    const menu = await prisma.menu.findMany({ orderBy: { name: 'asc' } })
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate')
    return res.status(200).json(menu)
  } catch (e) {
    console.error('menu list error', e)
    return res.status(500).json({ error: 'Failed to fetch menu' })
  }
}
