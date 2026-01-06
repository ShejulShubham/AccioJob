import { useEffect, useRef } from "react";

export default function VideoPlayer() {
  const playerRef = useRef(null);

  useEffect(()=>{
    // Unless muted the video will not auto play
    playerRef.current.muted = true;
    playerRef.current.play();
  }, [])

  return (
    <>
      <h1>Video Player</h1>
      <video
        ref={playerRef}
        width="500"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
      <br />
      <button onClick={() => playerRef.current.play()}>Play</button>
      <button onClick={() => playerRef.current.pause()}>Pause</button>
    </>
  );
}
