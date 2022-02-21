import React, { useState } from 'react'
import useFetch from '../components/useFetch';
import { useParams, useNavigate } from 'react-router-dom';
import './styles.css'

const Blogs = () => {
    const { blogs, error, isLoading } = useFetch('http://localhost:8000/blogs')
    const { id } = useParams()
    const navigate = useNavigate()
    const [deleted, setDeleted] = useState(false)
    
    const handleBlogDelete = (e) => {
        fetch('http://localhost:8000/blogs/' + blogs[id].id, {
            method: 'DELETE'
        })
        .then(() => {
        setDeleted(true)

            setTimeout(() => {
                navigate('/')
                setDeleted(false)
            }, 3000)
        })

    }
    return (
    <div>
        { error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {blogs && (
            <div>
                <h2 className='app_blogdetails-h2'>{blogs[id].title}</h2>
                <p className='app_blogdetails-p'><b>Author: {blogs[id].author}</b></p>
                <p className='app_blogdetails-p'>{blogs[id].body}</p>
                <button className='app_blogdetails-delete_btn' onClick={handleBlogDelete}>delete blog</button>
            </div>
        )}
        {deleted && (
            <div>
                <div className='app_blogdetails-deleted'>deleted</div>
                <div>redirecting you now...</div>
            </div>
        )}
    </div>
    )
}

export default Blogs