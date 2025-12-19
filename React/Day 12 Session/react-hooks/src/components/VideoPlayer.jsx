import { useEffect, useRef } from "react";

export default function VideoPlayer() {
  const playerRef = useRef(null);

//   TODO: Try to implement auto video play

  useEffect(() => {
    const playPromise = playerRef.current.play();
    if (playPromise !== undefined) {
      console.log("Auto play started...");
      playPromise
        .then(() => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          // Show a "Play" button so the user can start playback.
        });
    }
  }, []);

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
