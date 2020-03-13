import './VideoItem.css'
import React from 'react'

const VideoItem = ({video, onVideoSelect}) => {
    return(     // we do it with arrow because we want at the same time to pass the video and the callback function
        <div onClick={()=> onVideoSelect(video)} className="video-item item">
            
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt=""/>
            <div className="content">
                <div className="header">
                {video.snippet.title}
                </div>

            </div>
            
        </div>
    )
}

export default VideoItem