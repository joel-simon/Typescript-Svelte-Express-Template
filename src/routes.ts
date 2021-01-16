import { Router, Request, Response } from 'express'
export const router:Router = Router()

router.get('/data', (req:Request, res:Response) => {
    res.status(200).json({
        data: [ 'a', 'b', 'c' ],
    })
})
