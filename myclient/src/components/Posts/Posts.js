import React from 'react';
import Post from './Post/Post';
import {Grid,CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import useStyles from './styles';
const Posts = ({ setCurrentId }) =>{
    const posts = useSelector((state) =>state.posts);
    console.log(posts);
    const classes = useStyles();
    
    return (
        <div>
            !posts.length ? <CircularProgress /> : (
      <Grid  className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
    )

        </div>
    );
}

export default Posts;