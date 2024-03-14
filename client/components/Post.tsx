import { MessageData, Postmodel } from '../models/dogimages'

export default function Post(props: Postmodel) {
  const post: MessageData = props.name
  return (
    <div>
      <p>{post.message}</p>
      <p>{post.author}</p>
      <img
        src={`${post.photoURL}`}
        alt="generated author profile pic from an API"
      />
    </div>
  )
}

// --- calling a react component named Child and passing it props ---
// <Child name="props" />
