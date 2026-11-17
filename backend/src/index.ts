import express from 'express'
import ingredientRouter from './controllers/ingredients.ts'


const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3001

app.get('/ping', (_request, response) => {
  console.log('pingeddd')
  response.send('pongsis')
})

app.use('/api/ingredients', ingredientRouter)

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`)
})