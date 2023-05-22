import React, { useState } from 'react'
import { AppBar, Button, Tabs, Toolbar, Typography, Tab } from "@mui/material"
import { Box } from '@mui/system'
import { Link } from "react-router-dom";
import { authActions } from '../store';
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <AppBar position='stickys' sx={
            { background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,153,253,1) 50%, rgba(114,162,183,1) 69%, rgba(161,145,165,1) 80%, rgba(252,176,69,1) 100%)" }
        }>
            <Toolbar>
                <Typography variant='h4'>Blogosphere</Typography>

                {isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
                    <Tabs indicatorColor="secondary" textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                        <Tab LinkComponent={Link} to="/blogs" label="All Blogs" /> {/*"value"th tab will be highlighted*/}
                        <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                        <Tab LinkComponent={Link} to="/blogs/add" label="Add Blogs" />
                    </Tabs>
                </Box>}

                <Box display="flex" marginLeft="auto">
                {!isLoggedIn && <> <Button variant="contained"
                        LinkComponent={Link} to="/auth"
                        sx={{ margin: 1, borderRadius: 10 }}
                        color="warning"
                    >Login
                    </Button>
                    <Button variant="contained"
                        LinkComponent={Link} to="/auth"
                        sx={{ margin: 1, borderRadius: 10 }}
                        color="warning"
                    >SignUp
                    </Button> </>}

                    {isLoggedIn && 
                    (<Button 
                        onClick={() => dispatch(authActions.logout())}
                        variant="contained"
                        LinkComponent={Link} to="/auth"
                        sx={{ margin: 1, borderRadius: 10 }}
                        color="warning"
                    >LogOut
                    </Button>) }
                </Box> 
            </Toolbar>
        </AppBar>
    )
}

export default Header
