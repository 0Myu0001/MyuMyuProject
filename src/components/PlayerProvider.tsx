import * as React from 'react';

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
const PlayerContext = React.createContext(); 

const PlayerProvider = ({
  children
}: any) => {
  const [position, setPosition] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isPause, setIsPause] = React.useState(false);
  const [isRepeat, setIsRepeat] = React.useState(0);
  const [isShuffle, setIsShuffle] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleClickPause = () => setIsPause(!isPause);

  const handleClickRepeat = () => {
    if (isRepeat === 0) {
      setIsRepeat(1);
    } else if (isRepeat === 1) {
      setIsRepeat(2);
    } else {
      setIsRepeat(0);
    }
  }; 

  const handleClickShuffle = () => setIsShuffle(!isShuffle);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const postId = "1"; 

  const audioRef = React.useRef(null);

  const [post, setPost] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/music/${postId}/`)
      .then((res) => res.json())
      .then(data => {setPost(data)})
  } ,[postId]);

  React.useEffect(() => {
    // @ts-expect-error TS(2339): Property 'user_id' does not exist on type 'never'.
    if (post && post.user_id) {
      // @ts-expect-error TS(2339): Property 'user_id' does not exist on type 'never'.
      fetch(`http://127.0.0.1:8000/api/user/${post.user_id}`)
        .then((res) => res.json())
        .then(data => {setUser(data)})
    }
  }, [post]);

  React.useEffect(() => {
    if (post && audioRef.current) {
      // @ts-expect-error TS(2339): Property 'src' does not exist on type 'never'.
      audioRef.current.src = post.post;
    } else if (post) {
      // @ts-expect-error TS(2322): Type 'HTMLAudioElement' is not assignable to type ... Remove this comment to see the full error message
      audioRef.current = new Audio(post.post);
    }
  }, [post]);

  React.useEffect(() => {
    if (post && audioRef.current) {
      // @ts-expect-error TS(2339): Property 'src' does not exist on type 'never'.
      audioRef.current.src = post.post;
    } else if (post) {
      // @ts-expect-error TS(2322): Type 'HTMLAudioElement' is not assignable to type ... Remove this comment to see the full error message
      audioRef.current = new Audio(post.post);
    }
    if (audioRef.current) {
      // @ts-expect-error TS(2339): Property 'onloadedmetadata' does not exist on type... Remove this comment to see the full error message
      audioRef.current.onloadedmetadata = () => {
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        setDuration(audioRef.current.duration);
      };
      // @ts-expect-error TS(2339): Property 'ontimeupdate' does not exist on type 'ne... Remove this comment to see the full error message
      audioRef.current.ontimeupdate = () => {
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        setPosition(audioRef.current.currentTime);
      };
    }
  }, [post]);

  React.useEffect(() => {
    if (audioRef.current) {
      // @ts-expect-error TS(2339): Property 'play' does not exist on type 'never'.
      isPause ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPause]);

  React.useEffect(() => {
    if (audioRef.current) {
      const handleSongEnd = () => {
        if (isRepeat === 0) {
          setIsPause(true);
        } else if (isRepeat === 1) {
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          audioRef.current.currentTime = 0;
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          audioRef.current.play();
        } else if (isRepeat === 2) {
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          audioRef.current.currentTime = 0;
          // @ts-expect-error TS(2531): Object is possibly 'null'.
          audioRef.current.play();
        }
      }
      // @ts-expect-error TS(2339): Property 'addEventListener' does not exist on type... Remove this comment to see the full error message
      audioRef.current.addEventListener('ended', handleSongEnd);
      return () => {
        // @ts-expect-error TS(2531): Object is possibly 'null'.
        audioRef.current.removeEventListener('ended', handleSongEnd);
      }
    }
  }, [audioRef.current])

  const [draggingValue, setDraggingValue] = React.useState(null);

  const handlePositionChange = (event: any, newPosition: any) => {
    setDraggingValue(newPosition);
  };
  
  const handlePositionChangeCommitted = (event: any, newPosition: any) => {
    setPosition(newPosition);
    if (audioRef.current) {
      // @ts-expect-error TS(2339): Property 'currentTime' does not exist on type 'nev... Remove this comment to see the full error message
      audioRef.current.currentTime = newPosition;
    }
    setDraggingValue(null);
  };

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <PlayerContext.Provider value={{post, user, position, setPosition, duration, setDuration, isFavorite, setIsFavorite, isPause, setIsPause, handleClickPause, postId, handlePositionChange, handlePositionChangeCommitted, draggingValue, handleClickRepeat, handleClickShuffle, isRepeat, isShuffle, value, handleChange }}>
      {children}
    </PlayerContext.Provider>
  );

};

const usePlayer = () => {
  const context = React.useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
};

export { PlayerProvider, usePlayer };
