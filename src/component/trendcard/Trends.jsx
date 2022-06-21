import React from 'react'
import './trend.css';
import {TrendData} from '../../data/trendData';
import ShareModal from '../sharemodal/ShareModal';
const Trends = () => {
  const [opened,setOpened]=React.useState(false);
  return (
    <div className="trends-card-wraper">
      <h4>Trends for you</h4>
      <div className="trends-details">
        {TrendData &&
          TrendData.map((post, index) => {
            return (
              <div className="trends" key={index}>
                <span>
                  <b>#{post.name}</b>
                </span>
                <span>{post.shares}k shares</span>
              </div>
            );
          })}
        <button onClick={() => setOpened(true)}>share</button>
        <ShareModal opened={opened} setOpened={setOpened} />
      </div>
    </div>
  );
}

export default Trends