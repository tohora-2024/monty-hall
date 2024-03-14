import type { MessageData } from '../client/models/dogimages.ts'
const filePath = 'storage/data.json'
import * as fs from 'node:fs/promises'

export async function getMessages(): Promise<MessageData> {
  try {
    const json = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(json)
  } catch (error: any) {
    return error.message
  }
}

// export async function getMessageById(
//   id: number
// ): Promise<MessageData | undefined> {
//   try {
//     const json = await fs.readFile(filePath, 'utf-8')
//     const messages = JSON.parse(json).messages
//     const messageById = messages.find(
//       (message: MessageData) => message.id == id
//     )
//     return messageById
//   } catch (error: any) {
//     return error.message
//   }
// }

export async function addMessage(newMessage: MessageData): Promise<void> {
  try {
    const json = await fs.readFile(filePath, 'utf-8')
    const data = JSON.parse(json)
    const idArray = data.event.map((message) => message.id)
    const id = Math.max(...idArray)
    const newId = id + 1
    newMessage.id = newId
    data.event.push(newMessage)
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
  } catch (error: any) {
    throw new Error('Failed: ' + error.message)
  }
}
