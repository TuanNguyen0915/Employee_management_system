import { Router } from 'express'
import * as adminCtrl from '../controllers/admin.js'

const router = Router()

router.get('/', adminCtrl.allAdmins)

export { router }