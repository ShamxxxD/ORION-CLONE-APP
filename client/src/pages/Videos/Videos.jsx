import axios from "axios";
import "./style.css";
import React, { useEffect, useState } from "react";
import { VideosBanner } from "../../components/Banner/Banner";
import { apiVideosUrl } from "../../api/requests";
import { VideosBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(apiVideosUrl)
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <VideosBanner />
      <VideosBreadCrumb />
      <div className="container">
        <div className="videos-wrapper">
          {videos.map((video) => {
            return (
              <div className="videos-item">
                <iframe
                  className="video-thumbnail"
                  title="Embed youtube"
                  playing="true"
                  allow="autoplay;  encrypted-media"
                  frameBorder="0"
                  src={`https://www.youtube.com/embed/${
                    video?.key || ""
                  }?autoplay=0&mute=1`}
                />
                <h3 className="videos-title">{video.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Videos;
