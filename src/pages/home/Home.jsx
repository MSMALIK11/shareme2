import React from "react";
import PostSlide from "../../component/postSlide/PostSlide";
import Profile from "../../component/profile/Profile";
import RightSlide from "../../component/rightSlide/RightSlide";
import './home.css';


const Home=()=>{

    return(
        <div className="Hom">
           

            
       

        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3">
<Profile />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-6">
<PostSlide />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3">
<RightSlide />
            </div>
        </div>

        
        </div>
    )
}

export default Home