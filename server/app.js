import express from 'express'
import { getItems, getItem,insertItem, updateItem, validaUsuario } from './database.js'

const app = express()
app.use(express.json())

app.get("/validaUsuario", async (req,res) => {
    const items = await validaUsuario(req.body)
    res.send(items)
})

app.get("/items", async (req,res) => {
    const items = await getItems()
    res.send(items)
})

app.get("/items/:id", async (req,res) => {
    const id = req.params.id
    const item = await getItem(id)
    res.send(item)
})

app.post("/items", async (req,res) => {
    const item = await insertItem(req.body)
    res.status(201).send(item)
})

app.post("/items/:id", async (req,res) => {
    const id = req.params.id
    const item = await updateItem(id,req.body)
    res.status(201).send(item)
})

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send('Erro no express')
})

app.listen(8080, () => {
    console.log('Server is running on port 8080')
})