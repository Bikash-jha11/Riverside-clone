import React, { useRef, useState } from "react";
import "../styles/streampage.css";
import { useSearchParams, useParams } from "react-router-dom";
// import { useWebRTC } from '../hooks/useWebRTC'; // your custom hook for WebRTC
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsCameraVideoOff } from "react-icons/bs";
import { HiSpeakerWave } from "react-icons/hi2";



const VideoRoom: React.FC = () => {
  const { roomId } = useParams();
  const [params] = useSearchParams();
  const name = params.get("name") || "Guest";

  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideosRef = useRef<HTMLDivElement>(null);

  const [joinedno, setJoinedno] = useState<number>(1);

  // useWebRTC(roomId!, name, localVideoRef, remoteVideosRef); // custom hook handles socket + WebRTC

  return (
    <div className="video-room">
      <div className="video-section">
        <div className="video-grid" ref={remoteVideosRef}>
          {/* Remote videos will be appended via useWebRTC */}
          <video ref={localVideoRef} autoPlay muted className="video-tile" />

          {joinedno > 1 ? (
            <video ref={localVideoRef} autoPlay muted className="video-tile" />
          ) : (
            <div className="video-title">
              <div className="inner_section">
                <h1>Invite people</h1>
                <p>Share this link to invite people to your studio.</p>
                <div className="link">
                  <p>4589cbnjgcg8y9</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="controls">
          <button className="control-btn"><FaMicrophoneAlt/></button>
          <button className="control-btn"><BsCameraVideoOff/></button>
          <button className="control-btn "><HiSpeakerWave/></button>
          <button className="control-btn leave">Record</button>
        </div>
      </div>

      <div className="chat-section">
        <div className="chat-header">Chat</div>
        <div className="chat-messages" id="chat-messages"></div>
        <form className="chat-form">
          <input
            type="text"
            className="chat-input"
            placeholder="Type a message..."
          />
          <button type="submit" className="chat-send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoRoom;
