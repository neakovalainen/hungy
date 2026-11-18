import { createRequire } from 'module'

const require = createRequire(import.meta.url)

require('dotenv').config()

export default {
  PORT: process.env.PORT || 3001,
  DATABASE_URL: process.env.DATABASE_URL
}
