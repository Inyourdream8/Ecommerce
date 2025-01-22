import express from 'express'
import cors from 'cors'
import { router } from './routes' // Import your routes

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api', router) // Use your routes

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
