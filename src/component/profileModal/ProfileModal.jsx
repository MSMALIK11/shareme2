import React,{useRef} from 'react';
import { GrGallery } from "react-icons/gr";
import {  Modal, useMantineTheme } from "@mantine/core";
import '../auth/login.css';
import InputBox from '../common/InputBox';
import '../postShare/postsahre.css';
const ProfileModal = ({opened,setOpened}) => {
  // const [image,setImage]=useState('')
      const theme = useMantineTheme();
        const imageRef = useRef();
        const imagecoverRef = useRef();
          const onImageChange = (e) => {
            if (e.target.files && e.target.files[0]) {
              // let img = e.target.files[0];
              // setImage({ image: URL.createObjectURL(img) });
              // setImage(img)
            }
          };
          const onCoverImageChange =()=>{

          }

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
    >
      {/* Modal content */}

      <form>
        <h3>Your Info</h3>
        <div className="input-container">
          <InputBox name="name" placeText="your name" />
          <InputBox name="name" placeText="your Email" />
        </div>
        <div className="input-container">
          <InputBox name="name" placeText="@username" />
        </div>
        <div className="input-container">
          <InputBox name="name" placeText="Relationship Status" />
          <InputBox name="name" placeText="work at" />
        </div>
        <div className="input-container share-option"style={{marginTop:50}}>
          <div className="share-icons" onClick={() => imageRef.current.click()}>
            <span className="gallery">
              <GrGallery />
            </span>
            <span>Photos</span>
          </div>
          <button className='my-button'>update</button>
          <div
            className="share-icons"
            onClick={() => imagecoverRef.current.click()}
          >
            <span className="gallery">
              <GrGallery />
            </span>
            <span>Cover Photo</span>
          </div>
        </div>
      </form>
  

      <div style={{ display: "none" }}>
        <input
          type="file"
          name="myImage"
          ref={imageRef}
          onChange={onImageChange}
        />
      </div>
      <div style={{ display: "none" }}>
        <input
          type="file"
          name="myImage"
          ref={imagecoverRef}
          onChange={onCoverImageChange}
        />
      </div>
    </Modal>
  );
}

export default ProfileModal