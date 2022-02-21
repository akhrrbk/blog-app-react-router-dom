import React from 'react'
import useFetch from '../components/useFetch';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const { blogs, error, isLoading } = useFetch('http://localhost:8000/blogs')
    
    return (
        <div className='app_blogs'>
            <h2 className='app_blogs-h2'>Blog List</h2>
            <ul className='app_blogs-ul'>
                { error && <div>{error}</div>}
                {isLoading && <div>Loading...</div>}
                { blogs &&
                    (blogs.map((blog, i) => (
                        <li key={i} className='app_blogs-ul_li'>
                            <Link className='app_blogs-ul_li_link' to={`/blogs/${i}`}>{blog.title}</Link>
                        </li>
                    )))
                }
            </ul>
        </div>
    )
}

export default Blogs