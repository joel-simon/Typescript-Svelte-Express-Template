import express, { Request, Response } from 'express'
import cors from 'cors'
import path from 'path'

import { router } from './routes'
import { notFound, errorHandler } from './middlewares'
import { message } from './common/shared'

const app:express.Application = express()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/public'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    })
}

app.use(express.json())
app.use(cors())

app.get('/', (req:Request, res:Response) => {
    res.status(200).json({ message })
})

app.use('/api/v1', router)
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 1000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})