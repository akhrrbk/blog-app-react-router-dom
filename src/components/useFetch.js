import React, {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {
      const abortCont = new AbortController()
      fetch(url, {signal: abortCont.signal})
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
          if(err.name === 'AbortError'){
            console.log('fetch aborted!');
          } else {
            setError(err.message)
            setIsLoading(false)
          }
        })
      
      return () => abortCont.abort()
    }, [url])

    return {blogs, isLoading, error}
}

export default useFetch