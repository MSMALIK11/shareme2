import React from 'react'
import './trend.css';
import {TrendData} from '../../data/trendData'
const Trends = () => {
  return (
    <div className="trends-card-wraper">
      <h4>Trends for you</h4>
      <div className="trends-details">
          {TrendData && TrendData.map((post,id)=>{
          return (
            <div className="trends">
              <span>
                <b>#{post.name}</b>
              </span>
              <span>{post.shares}k shares</span>
            </div>
          );
      })} 

      <button>share</button>
      
      
      </div>

      
    </div>
  );
}

export default Trends