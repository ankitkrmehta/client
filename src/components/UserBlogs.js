import React, { useEffect, useState } from 'react'
import Blog from './Blog';
import axios from 'axios';


const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    const res = await axios
        .get(`${process.env.REACT_APP_BASE_URL}/api/blog/user/${id}`||`http://localhost:5000/api/blog/user/${id}`)
        .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setUser(data.user)); //should be error in video
}, []);
  
  console.log(user);
  
  return (
    <div>
      {user && user.blogs && (user.blogs.map((blog,index) => 
        <Blog 
          id={blog._id}
          key={index}
          isUser={true}
          title={blog.title}
          description={blog.description}
          imageURL={blog.image}
          userName={user.name}
        />) )}
    </div>
  )
}

export default UserBlogs