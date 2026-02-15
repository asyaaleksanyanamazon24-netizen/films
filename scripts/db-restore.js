import 'dotenv/config'
import { spawn } from 'child_process'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const url = process.env.DIRECT_DATABASE_URL || process.env.DATABASE_URL
if (!url) {
  console.error('Set DIRECT_DATABASE_URL (or DATABASE_URL) in .env for pg_restore')
  process.exit(1)
}

const dumpFile = path.join(path.dirname(__dirname), 'db_dump.bak')
const child = spawn(
  'pg_restore',
  ['-d', url, '-v', dumpFile],
  { stdio: 'inherit', shell: true }
)
child.on('close', (code) => {
  if (code === 0) console.log('-complete-')
  process.exit(code ?? 0)
})
