import React from "react";
import ReactPlayer from "react-player";

export default function Apod(props) {
  const { apodData } = props;
  return (
    <div className="Apod">
      <h1>{apodData.title}</h1>
      <h2>{apodData.date}</h2>
      {apodData.media_type === "image" || apodData.media_type === "gif" ? (
        <img className="img" src={apodData.url} alt={apodData.explanation} />
      ) : (
        <div className="video-tag">
          <ReactPlayer
            url={apodData.url}
            controls={true}
            width={750}
            height={500}
          />
        </div>
      )}
      <p>{apodData.explanation}</p>
      <p>{apodData.media_type}</p>
    </div>
  );
}
