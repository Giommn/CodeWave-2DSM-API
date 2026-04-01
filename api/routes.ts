import normsroutes from './src/routes/normControllerRoute'
import userroutes from './src/routes/userControlerRoute'
import  Express  from 'express'
const router=Express.Router()

router.use(normsroutes)
router.use(userroutes)


export default router

