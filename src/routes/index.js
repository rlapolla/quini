
import { Router } from "express"

const router = Router()


router.get('/', (req, res)=>{


    https://www.freesqldatabase.com/account/


    res.status(200).render('index', 
        {titulo: 'título desde el parámetro'})

})

router.get('/about', (req, res)=>{

    res.status(200).render('about')

})

router.get('/contact', (req, res)=>{

    res.status(200).render('contact')

})


export default router


