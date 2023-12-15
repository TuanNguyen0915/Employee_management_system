import {Router} from 'express'
import * as categoryCtrl from '../controllers/category.js'

const router = Router()

router.get('/', categoryCtrl.allCategories)
router.post('/create', categoryCtrl.create)
router.delete('/:categoryId', categoryCtrl.deleteCategory)

export {router}