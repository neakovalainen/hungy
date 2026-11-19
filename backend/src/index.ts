import express from 'express'
import ingredientRouter from './controllers/ingredients.ts'
import { createRequire } from 'module'
//import config from './utils/config.ts'
import { startDatabase } from './utils/db.ts'
const require = createRequire(import.meta.url)

require('dotenv').config()
const PORT = 3001

const app = express()
app.use(express.json())
app.use(express.static('dist'))
app.use('/api/ingredients', ingredientRouter)

app.get('/ping', (_request, response) => {
  console.log('pingeddd')
  response.send('pongsis')
})

// app.listen(PORT, () => {
//   console.log(`server is running on ${PORT}`)
// })

const start = async () => {
  await startDatabase()
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
  })
}

start()