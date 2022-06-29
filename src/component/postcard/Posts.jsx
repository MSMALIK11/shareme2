import React from 'react';

import PostCard from './PostCard';
import { useSelector } from 'react-redux';
import img from '../../images/postpic1.jpg';

const Posts = () => {
  const {user,loading}=useSelector((state)=>state.user)


  return (
 
     
        <div>
          {user &&
            user?.post.map((post, id) => (
              <PostCard post={post} user={user}  img={img} key={id} loading={loading} />
            ))}
        </div>
  
   
  );
}

export default Posts