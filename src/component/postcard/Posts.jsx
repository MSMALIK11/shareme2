import React from 'react';

import PostCard from './PostCard';
// import { useSelector } from 'react-redux';
// import img from '../../images/postpic1.jpg';
import {PostsData} from '../../data/postdata'

const Posts = () => {
  // const {user,loading}=useSelector((state)=>state.user)


  return (
 
     
        <div>
          {PostsData &&
            PostsData?.map((post, id) => (
              <PostCard post={post}  key={id}/>
            ))}
        </div>
  
   
  );
}

export default Posts