import 'dotenv/config'
import express from "express"
import cookieParser from 'cookie-parser'

// connect mongodb
import './config/database.js'

const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())


app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running")
})
