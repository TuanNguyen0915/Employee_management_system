import Admin from "../models/admin.js"

const allAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({})
    return res.status(201).json({ status: true, message: "Found all admins", data: admins })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Interval server error. Please, try again' })
  }
}

export { allAdmins }