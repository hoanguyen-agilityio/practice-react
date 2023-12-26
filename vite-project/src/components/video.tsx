// Apply Synchronizing with Effects
import { useState, useRef, useEffect } from "react";

const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()');
      ref.current.play();
    } else {
      console.log('Calling video.pause()');
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />
}

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
      />
    </div>
  );
}

export default Video
