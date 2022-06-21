import React,{useState} from 'react';
import './postcard.css';

import like from '../../images/like.png';

import notlike from '../../images/notlike.png';
import comment from '../../images/comment.png';
import share from '../../images/share.png';
const PostCard = ({post}) => {
  const[active,setActive]=useState(true)

  return (
    <div className="post-card-wraper">
      <div className="post-image">
        <img src={post.img} alt="" />
      </div>
      <div className="likes">
        {post.liked ? (
          <img src={like} alt="" onClick={() => setActive(!active)} />
        ) : (
          <img src={notlike} alt="" onClick={() => setActive(!active)} />
        )}
        <img src={comment} alt="" />
        <img src={share} alt="" />
      </div>
      <span className="likescount">{post.likes} likes</span>

      <div className="post-info">
        <span>{post.name}</span>
        <span>{post.desc}</span>
      </div>
    </div>
  );
}

export default PostCard