// import type {MessageData} from '../'
import * as fs from 'node:fs/promises'

const filePath = 'storage/data.json'

export async function getMessages(): Promise<MessageData | undefined> {
  try {
    const json = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(json)
  } catch (error: any) {
    return 'invalid'
  }
  throw Error
}
