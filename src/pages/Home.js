import React from 'react'
import Bloglist from '../components/Bloglist';
import useFetch from '../components/useFetch';

const Home = () => {
    const { blogs, isLoading, error} = useFetch('https://ecomm-products.modus.workers.dev/')
  
    return (
    <div className="App">
      { error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && (
        blogs.splice(0,5).map(blog => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <img src={blog.images[0]} style={{width: '40%', height: 'auto'}} alt="" />
          </div>
      ))
      )}
      {/* {blogs && <Bloglist blogs={blogs} title='All My Blogs!' />} */}
    </div>
    );
}

export default Home