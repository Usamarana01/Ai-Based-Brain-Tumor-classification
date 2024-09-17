import React from 'react';
import './VideoCardCSS.css'; // Import the CSS file for custom styles

const VideoCard = ({ video }) => {
  return (
    <div className="card shadow-sm video-card">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={video?.url.replace("watch?v=", "embed/")} // Ensure proper embedding
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video?.title}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title text-primary">{video?.title}</h5>
      </div>
    </div>
  );
};

export default VideoCard;