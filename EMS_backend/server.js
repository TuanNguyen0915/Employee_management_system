import 'dotenv/config'
import express from "express"
import cookieParser from 'cookie-parser'

// connect mongodb
import './config/database.js'

// import routers
import { router as authRouter } from './routers/auth.js'

const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/api/auth', authRouter)

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running")
})
