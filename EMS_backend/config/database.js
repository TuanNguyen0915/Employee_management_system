import mongoose from "mongoose"

const db = mongoose.connection
mongoose.connect(process.env.DATABASE_URL)
db.on('connected', ()=>{
  console.log(`Connected to mongoDB from ${db.name}`)
})