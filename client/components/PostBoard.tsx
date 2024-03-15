import { useQuery } from '@tanstack/react-query'
import Post from './Post'
import { getMessages } from '../api/apiClient'
import { Link } from 'react-router-dom'

export default function PostBoard() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ['messages'],
    queryFn: () => getMessages(),
  })

  if (isPending) {
    return <>Loading</>
  }

  if (isError) {
    return <>Oops! {error}</>
  }

  return (
    <>
      <h1 className="boardHeading">Thank you Lucy!</h1>
      <h2 className="submit">
        <Link to="/submit">Add your message</Link>
      </h2>
      <div className="postBoardContainer">
        {data.event?.map((post) => (
          <Post name={post} />
        ))}
      </div>
    </>
  )
}
