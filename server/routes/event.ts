import express from 'express'
import * as store from '../store.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  const data = await store.getMessages()
  res.json(data)
})

// router.get('/:id', async (req, res) => {
//   try {
//     const id = Number(req.params.id)
//     const data = await store.getMessageById(id)
//     res.json(data)
//   } catch (error: any) {
//     res.sendStatus(404)
//   }
// })

router.post('/:submit', async (req, res) => {
  try {
    const newMessage = req.body
    // const imageResponse =
    await store.addMessage(newMessage)
    res.sendStatus(201)
  } catch (error: any) {
    res.sendStatus(404)
    console.error(error)
  }
})

export default router
