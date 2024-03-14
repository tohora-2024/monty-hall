import { MessageData } from '../models/dogimages'
import Post from './Post'

export default function PostBoard() {
  const data = [
    {
      id: 1,
      author: 'Jess',
      message: 'Hello',
      photoURL: 'https://images.dog.ceo/breeds/chihuahua/n02085620_575.jpg',
    },
    {
      id: 2,
      author: 'Joel',
      message: 'Bye',
      photoURL: 'https://images.dog.ceo/breeds/chihuahua/n02085620_575.jpg',
    },
    {
      id: 3,
      author: 'Tyler',
      message: 'what?',
      photoURL: 'https://images.dog.ceo/breeds/chihuahua/n02085620_575.jpg',
    },
  ]

  return (
    <>
      <h1>PostBoard</h1>
      {data.map((post) => (
        <Post name={post} />
      ))}
    </>
  )
}
