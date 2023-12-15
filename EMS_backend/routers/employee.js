import { Router } from 'express'
import * as employeeCtrl from '../controllers/employee.js'


const router = Router()
router.get('/', employeeCtrl.allEmployees)
router.post('/', employeeCtrl.createEmployee)

export { router }