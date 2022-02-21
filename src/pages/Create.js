import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [save, setSave] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const blog = { title, body, author }
    // console.log(blog);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    })
    .then(() => {
      setSave(true)
      setTitle('')
      setBody('')
      setAuthor('')
      
      setTimeout(() => {
        setSave(false)
        navigate('/')
      }, 3000)
    })
  }

  return (
    <div className='app_create'>
        <h2>Add a New Blog!</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          
          <label>Blog author:</label>
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="" defaultValue disabled>choose one</option>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
            <option value="Axror">Axror</option>
          </select>
          <button>Save Blog</button>
        </form>

        {save && (
          <div>
            <div className='app_create-save'>
              saved!
            </div>
            <div>redirecting you...</div>
          </div>
        )}
    </div>
  )
}

export default Create