import { useQuery } from '@tanstack/react-query'
import { getDogImages } from '../api/dogimagesApi'
import { MessageData } from '../models/dogimages'
import Post from './Post'
import { getMessages } from '../api/apiClient'

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
      <h1>PostBoard</h1>
      {data.event?.map((post) => (
        <Post name={post} />
      ))}
    </>
  )
}
