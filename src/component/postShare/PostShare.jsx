import React,{useState,useRef} from 'react';
import './postsahre.css';
import img from '../../images/img3.png';
import { GrGallery } from "react-icons/gr";
import { FaPhotoVideo } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

import { AiOutlineCloseCircle } from "react-icons/ai";
const PostShare = () => {
  const[image,setImage]=useState(null);
  const imageRef=useRef();

  const onImageChange=(e)=>{
if(e.target.files && e.target.files[0]){
  let img=e.target.files[0];
  setImage({image:URL.createObjectURL(img)})
}
  }

 
  return (
    <div className="post-share">
      <div>
        <img src={img} alt="" className="post-share-image" />
        <input type="text" placeholder="#whats happening " />
      </div>
      <div className="share-option">
        <div className="share-icons" onClick={() => imageRef.current.click()}>
          <span className="gallery">
            <GrGallery />
          </span>
          <span>Photos</span>
        </div>
        <div className="share-icons">
          <span className="video">
            <FaPhotoVideo />
          </span>
          <span>video</span>
        </div>
        <div className="share-icons">
          <span className="location">
            <GoLocation />
          </span>
          <span>Location</span>
        </div>
       

        <button className="share-post-button">share</button>
      </div>
      {image && (
        <div className="image-preview-wraper">
          <span className="close-preview">
            <AiOutlineCloseCircle onClick={() => setImage(null)} />
          </span>
          {image && (
            <div className="imagePreview">
              <img src={image.image} alt="" />
            </div>
          )}
        </div>
      )}

      <div style={{ display: "none" }}>
        <input
          type="file"
          name="myImage"
          ref={imageRef}
          onChange={onImageChange}
        />
      </div>
    </div>
  );
}

export default PostShare