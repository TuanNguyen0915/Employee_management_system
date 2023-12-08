import User from "../models/user.js"
import Admin from "../models/admin.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


const generateToken = user => {
  return jwt.sign({ id: user._id, role: user._role }, process.env.JWT_KEY, { expiresIn: '15d' })
}


const register = async (req, res) => {
  try {
    let user
    // Check user exists by role
    if (req.body.role === 'admin') {
      user = await Admin.findOne({ email: req.body.email })
    } else if (req.body.role === 'user') {
      user = await Admin.findOne({ email: req.body.email })
    }
    // return error message if user was found, create hashPassword otherwise
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
      user = await User.create({
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

const login = async (req, res) => {
  try {
    let loginUser
    const admin = await Admin.findOne({ email: req.body.email })
    const user = await User.findOne({ email: req.body.email })
    loginUser = admin ? admin : user ? user : null
    // if loginUser = null, return with error message, check password otherwise
    if (!loginUser) {
      return res.status(404).json({ success: false, message: "This account doesn't exist. Please register new account " })
    }
    // check password
    const isPasswordMatching = await bcrypt.compare(req.body.password, loginUser.password)
    // return error if isPasswordMatching false, generateToken otherwise
    if (!isPasswordMatching) {
      return res.status(500).json({ success: false, message: " This password is not matching" })
    }
    // create Token
    const token = generateToken(loginUser)
    const { password, role, ...rest } = loginUser._doc
    res.status(200).json({ success: true, message: "Login successful", token, data: { ...rest } })

  } catch (error) {
    return res.status(500).json({ success: false, message: 'Interval server error. Please, try again' })
  }
}

export { register, login }