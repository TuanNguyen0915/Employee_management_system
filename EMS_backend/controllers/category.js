import Category from "../models/category.js"

const allCategories = async (req, res) => {
  try {
    const categories = await Category.find({})
    res.status(201).json({ success: true, message: 'All categories had found', data: categories })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Interval server error. Please, try again' })
  }
}

const create = async (req, res) => {
  try {
    let selectedCategory = await Category.findOne({ name: req.body.name })
    if (selectedCategory) {
      return res.status(404).json({ success: false, message: 'This category already exists.' })
    } else {
      selectedCategory = await Category.create({
        name: req.body.name
      })
    }
    res.status(201).json({ success: true, message: "Successful to create new category", data: selectedCategory })
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Interval server error. Please, try again' })
  }
}

const deleteCategory = async (req,res) => {
  try {
    const selectedCategory = await Category.findByIdAndDelete(req.params.categoryId)
    res.status(200).json({success: true,message: 'Delete the category', data: selectedCategory})
  } catch (error) {
    return res.status(500).json({success: false, message: 'Interval sever error. Please, try again'})
  }
}

export { allCategories, create, deleteCategory }