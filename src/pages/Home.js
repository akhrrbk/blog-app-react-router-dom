import React from 'react'
import Bloglist from '../components/Bloglist';
import useFetch from '../components/useFetch';
import { Link } from 'react-router-dom';

const Home = () => {
    const { blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
  
    return (
    <div className="app_home">
      {/* <h1 className='app_home-h1'>First 5 elements from API</h1> */}
      { error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title='All My Blogs!' />}
      {/* {blogs && (
        blogs.splice(0,5).map((blog, i) => (
          <div className='app_home-container' key={i}>
            <img src={blog.images[0]} style={{width: '40%', height: 'auto'}} alt="" />
            <div className='app_home-container_desc'>
              <div className='container_desc-title'>
                <b>
                  <Link to={`/blogs/${i}`}>
                    {blog.title}
                  </Link>
                  </b>
              </div>
              <div>{blog.description}</div>
            </div>

          </div>
      ))
      )} */}
    </div>
    );
}

export default Home