import React from 'react'
import useFetch from '../components/useFetch';
import { useParams } from 'react-router-dom';
import './styles.css'

const Blogs = () => {
    const { blogs, error, isLoading } = useFetch('https://ecomm-products.modus.workers.dev/')
    const { id } = useParams()
    
    return (
    <div>
        { error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {blogs && (
            <div>
                <h2 className='app_blogdetails-h2'>{blogs[id].title}</h2>
                <p className='app_blogdetails-p'>{blogs[id].description}</p>
                <img src={blogs[id].images[0]} className='app_blogdetails-img' alt="" />
            </div>
        )}
    </div>
    )
}

export default Blogs