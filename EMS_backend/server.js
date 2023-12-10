import 'dotenv/config'
import express from "express"
import cookieParser from 'cookie-parser'
import cors from 'cors'

// connect mongodb
import './config/database.js'

// import routers
import { router as authRouter } from './routers/auth.js'
import { router as CategoryRouter } from './routers/category.js'

const app = express()
const corOptions = {
  origin: true
}
const port = process.env.PORT || 3001

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corOptions))
// routes
app.use('/api/auth', authRouter)
app.use('/api/categories', CategoryRouter)

app.listen(port, () => {
  console.log("Server is running at", port)
})
