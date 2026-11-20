import { createRequire } from 'module'

const require = createRequire(import.meta.url)

require('dotenv').config()

export default {
  DATABASE_URL: process.env.DATABASE_URL,
  SECRET: process.env.SECRET
}
