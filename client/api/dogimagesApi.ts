import request from 'superagent'
import { DogImages } from '../models/dogimages'

export async function getDogImages(): Promise<DogImages[]> {
  const response = await request.get('https://dog.ceo/api/breeds/image/random')
  return response.body.message
}
