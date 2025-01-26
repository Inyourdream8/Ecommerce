import express from 'express'
import payload from 'payload'

const app = express()
const port = process.env.PORT || 3000

payload.init({
  secret: 'YOUR_SECRET_KEY',
  mongoURL: 'YOUR_MONGO_URL',
  express: app,
})

// Sample route
app.get('/api', (req, res) => {
  res.send('API is working!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
