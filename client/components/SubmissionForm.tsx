import React, { useState } from 'react'

export default function SubmissionForm() {
  const [postInfo, setPostInfo] = useState({
    author: '',
    message: '',
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget
    setPostInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event?.preventDefault()
    console.log(postInfo)

    // --- SEMI PSEUDOCODE FOR Message Post Hook Call ---
    // const message = { ...postInfo}

    // if (message && typeof message === 'object'){
    //   usePostToDatabase(information)
    // }
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
              maxLength={200}
              id="Message"
              name="message"
              value={postInfo.message}
            ></textarea>
          </div>
          {/* This is a stretch opportunity for if we are allowing people to randomise their picture from different sources */}
          {/* <select>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select> */}
          <button type="submit">Submit</button>
        </form>
      </span>
    </>
  )
}
