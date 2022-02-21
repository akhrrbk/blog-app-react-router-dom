import './App.css';
import { useState, useEffect } from 'react'
import Bloglist from './components/Bloglist';

function App() {
  const [blogs, setBlogs] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://ecomm-products.modus.workers.dev/')
      .then(res => {
        if(!res.ok){
          throw Error('could not fetch the data from the source')
        }
        return res.json()
      })
      .then(data => {
        setBlogs(data)
        setIsLoading(false)
        setError(null)
      })
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
      })
  }, [])
  
  return (
  <div className="App">
    { error && <div>{error}</div>}
    {isLoading && <div>Loading...</div>}
    {blogs && (
      blogs.splice(0,5).map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <img src={blog.images[0]} style={{width: '20%', height: 'auto'}} alt="" />
        </div>
    ))
    )}
    {/* {blogs && <Bloglist blogs={blogs} title='All My Blogs!' />} */}
  </div>
  );
}

export default App;
