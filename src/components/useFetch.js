import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      fetch(url)
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
    }, [url])

    return {blogs, isLoading, error}
}

export default useFetch