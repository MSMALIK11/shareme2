import React,{useState} from 'react';
import './postcard.css';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import like from '../../images/like.png';

import notlike from '../../images/notlike.png';
import comment from '../../images/comment.png';
import share from '../../images/share.png';

import LoadingCard from '../common/LoadingCard';
const PostCard = ({post,img,user,loading}) => {
  const[active,setActive]=useState(true);

  return (
    
    <div>
    {loading ? <div className="post-card-wraper">
     <LoadingCard />
    </div>
      
      
    :

    
  
      <div className="post-card-wraper">
        <div className="post-image">
          {loading ? <Skeleton height={390} /> : <img src={img} alt="" />}
        </div>
        <div className="likes">
        
              {post.likes ? (
                <img src={like} alt="" onClick={() => setActive(!active)} />
              ) : (
                <img src={notlike} alt="" onClick={() => setActive(!active)} />
              )}
              <img src={comment} alt="" />
              <img src={share} alt="" />
          
     
        </div>
        <span className="likescount"> likes</span>

        <div className="post-info">
          <span className="text-capitalize">{user?.name}</span>
          <span>{post?.desc}</span>
        </div>
      </div>
}
    </div>
  );
}

export default PostCard