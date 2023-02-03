import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setBlogs] = useState();
  const sendRequest = async () => {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/blog`||"http://localhost:5000/api/blog")
                      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data.blogs);
    return data;
  }
  //useEffect runs after every render
  //once any element in the dependancy array changes, 
  //useEffect will rerender the whole component
  useEffect(() => {
    sendRequest().then( (data) => setBlogs(data.blogs));
  },[]);
  
  return (
    <div>
      {blogs && blogs.map((blog,index) => 
        <Blog 
          id={blog._id}
          isUser={localStorage.getItem("userId") === blog.user._id}
          title={blog.title}
          description={blog.description}
          imageURL={blog.image}
          userName={blog.user.name} 
        /> 
      )}
    </div>
  )
}

export default Blogs