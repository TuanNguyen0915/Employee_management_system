import User from "../models/user.js"

const createEmployee = async (req, res) => {
  try {
    let newEmployee = await User.findOne({ email: req.body.email })
    if (newEmployee) {
      return res.status(500).json({ success: false, message: 'This user already existed. Please check with email' })
    }
    newEmployee = await User.create(req.body)
    res.status(201).json({ success: true, message: "Successful to create new user", data: newEmployee })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Interval server error. Please, try again' })
  }
}

const allEmployees = async (req, res) => {
  try {
    let allEmployees = await User.find({})
    return res.status(201).json({ success: true, message: "All data had fetch", data: allEmployees })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Interval server error. Please, try again' })
  }
}

export { allEmployees, createEmployee }