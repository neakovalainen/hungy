import express from 'express'
import ingredientRouter from './controllers/ingredients.ts'
import { createRequire } from 'module'
import config from './utils/config.ts'
import { startDatabase } from './utils/db.ts'
const require = createRequire(import.meta.url)

require('dotenv').config()

const app = express()
app.use(express.json())
app.use(express.static('dist'))

const PORT = process.env.PORT || 3001

app.get('/ping', (_request, response) => {
  console.log('pingeddd')
  response.send('pongsis')
})

app.use('/api/ingredients', ingredientRouter)

const start = async () => {
  await startDatabase()
  app.listen(config.PORT, () => {
    console.log(`server is running on ${PORT}`)
  })
}

start()