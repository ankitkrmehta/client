import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Blog = ({ title, description, imageURL, userName, isUser, id } ) => {

  console.log(title,userName);
  // const user = findUser();
  const navigate = useNavigate();

  const handleEdit = (event) => {
    navigate(`/myBlogs/${id}`);
  }

  const deleteRequest = async () => {
    const res = await axios.delete(`${process.env.REACT_APP_BASE_URL}/api/blog/${id}`|| `http://localhost:5000/api/blog/${id}`)
                .catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  const handleDelete = (event) => {
    deleteRequest()
    .then(() => navigate("/"))
    .then(() => navigate("/blogs"))
    .then((data) => console.log(data));
  }

  return (
    <div>
      <Card sx={{ width: "40%", margin: "auto", borderRadius: 2, mt: 2, padding:2, border: 0.05, borderColor: 'warning' , boxShadow:"5px 5px 10px #ccc",
          ":hover":{boxShadow: "10px 10px 20px #ccc"}  }}>

        {isUser && (
            <Box display="flex">
                <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
                    <ModeEditOutlineIcon color="warning" />
                </IconButton>
                <IconButton >
                    <DeleteForeverIcon onClick={handleDelete} color="error" />
                </IconButton>
            </Box>
        )}
        
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              {userName ? userName.charAt(0).toUpperCase() : ""}
            </Avatar>
          }

          title={title}
        />
        {/*subheader="Januray 14, 2022"*/}
      <CardMedia
        component="img"
        height="194"
        image= {imageURL}
        alt="Paella dish"
      />

      <CardContent>
      <hr /> <br />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

    </Card>
    </div>
  )
}

export default Blog