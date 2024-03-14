// import type {DogImages} from '../'
import * as fs from 'node:fs/promises'

const filePath = 'storage/data.json'

export async function getDoggo(): Promise<DogImages | undefined> {
  try {
    const json = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(json)
  } catch (error: any) {
    res.sendStatus(404)
  }
}
