import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

interface Users {
    name: string,
    email: string
}

const users: Array <Users> = []

app.post('/users', (request: Request, response: Response) => {
    const { name, email } = request.body

    const newUser = {
        name,
        email
    }

    users.push(newUser)

    return response.json(users)
})

app.listen(8080, () => {
    console.log('servidor rodando')
})