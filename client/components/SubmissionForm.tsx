import React, { useState } from 'react'
import { getDogImages } from '../api/dogimagesApi'
import { useQuery } from '@tanstack/react-query'

export default function SubmissionForm() {
  const [postInfo, setPostInfo] = useState({
    author: '',
    message: '',
    photoURL: '',
  })

  const picture = useQuery({
    queryKey: ['test'],
    queryFn: async () => getDogImages(),
  })

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.currentTarget
    setPostInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget
    setPostInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event?.preventDefault()

    try {
      const response = await fetch('/api/v1/messages/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postInfo),
      })

      if (!response.ok) {
        throw new Error('Failed to submit message')
      }

      setPostInfo({ author: '', message: '', photoURL: '' })
    } catch (error) {
      console.error('Error submitting message:', error)
    }
  }

  return (
    <>
      <h1>Submission form</h1>
      <div>
        <p>Hi there, please leave a kind message</p>
      </div>
      <span>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Name"
            id="Author"
            name="author"
            value={postInfo.author}
          ></input>
          <div>
            <textarea
              onChange={handleChange}
              placeholder="Message"
              maxLength={500}
              id="Message"
              name="message"
              value={postInfo.message}
            ></textarea>
          </div>
          <select onChange={handleSelect} name="photoURL">
            <option>Change this</option>
            <option value={picture.data}>Dog</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </span>
    </>
  )
}
