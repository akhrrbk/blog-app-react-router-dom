import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h2>NotFound</h2>
        <p className='app_notfound-p'>page cannot be found :(</p>
        <Link className='app_notfound-home' to='/'> > Back to Home Page</Link>
    </div>
  )
}

export default NotFound