import React from 'react';
import { PostsData } from "../../data/postdata";
import PostCard from './PostCard';
const Posts = () => {
  
  return (
    <div>
      {PostsData &&
        PostsData.map((post, id) => <PostCard post={post} id={id} key={id} />)}
    </div>
  );
}

export default Posts