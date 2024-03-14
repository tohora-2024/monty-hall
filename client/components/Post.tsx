import { MessageData } from '../models/dogimages'

export default function Post(post: MessageData) {
  console.log(post.author)
  return (
    <div>
      <p>{post.message}</p>
      <p>{post.author}</p>
      <img src={post.photoURL} alt="generated author profile pic from an API" />
    </div>
  )
}
