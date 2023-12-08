import User from "../models/user.js"
import Admin from "../models/admin.js"
import bcrypt from 'bcryptjs'

const register = async (req, res) => {
  try {
    let user
    if (req.body.role === 'admin') {
      user = await Admin.findOne({ email: req.body.email })
    } else if (req.body.role === 'user') {
      user = await Admin.findOne({ email: req.body.email })
    }
    if (user) {
      return res.status(500).json({ success: false, message: "The account exists. Please try to login" })
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    if (req.body.role === 'admin') {
      user = await Admin.create({
        email: req.body.email,
        password: hashPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role
      })
    } else if (req.body.role === 'user') {
      user = await Admin.create({
        email: req.body.email,
        password: hashPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role
      })
    }
    res.status(201).json({ success: true, message: "Successful to create an account", user: user })

  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error. Try again ' })
  }
}

export { register }