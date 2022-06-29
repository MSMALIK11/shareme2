import React from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingCard = () => {
  return (
    <>
      <div className="">
        <h1>loading</h1>
        <Skeleton height={390} />
        <div className="likes">
          <Skeleton circle={true} height={30} width={30} />
          <Skeleton circle={true} height={30} width={30} />
          <Skeleton circle={true} height={30} width={30} />
        </div>
        <div className="likescount">
          <p><Skeleton width={100} /></p>
        </div>
        <div className="post-info">
          <span><Skeleton /></span>
        </div>
      </div>
    </>
  );
}

export default LoadingCard