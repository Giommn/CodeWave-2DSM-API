import normsroutes from './src/routes/normControllerRoute'
import userroutes from './src/routes/userControlerRoute'
import  Express  from 'express'
import notaroutes from './src/routes/notaControllerRoute'
import pedidosroutes from './src/routes/pedidosControllerRoute'
const router=Express.Router()

router.use(normsroutes)
router.use(userroutes)
router.use(notaroutes)
router.use(pedidosroutes)
export default router

