import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: {type: String, require: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  salary: { type: Number, require: true },
  photo: { type: String },
  category: {type: mongoose.Types.ObjectId, ref:'Category'}
}, {
  timestamps: true
})

const User = mongoose.model("User", userSchema)
export default User