import express from 'express'
import ingredientRouter from './controllers/ingredients.ts'
import userRouter from './controllers/users.ts'
import path from 'path'

import { createRequire } from 'module'
import { startDatabase } from './utils/db.ts'

const require = createRequire(import.meta.url)

require('dotenv').config()
const PORT = 3001

const app = express()
app.use(express.json())
app.use(express.static('dist'))
app.use('/api/ingredients', ingredientRouter)
app.use('/api/users', userRouter)

app.get('/ping', (_request, response) => {
  console.log('pingeddd')
  response.send('pongsis')
})

app.get('/{*_}', (_request, response) => {
  console.log(_request.params, { depth: null })
  response.sendFile(path.resolve('dist', 'index.html'))
})

const start = async () => {
  await startDatabase()
  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
  })
}

start()