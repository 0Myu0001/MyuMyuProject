import * as React from 'react';

const PlayerContext = React.createContext(); 

const PlayerProvider = ({ children }) => {
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const postId = "*00000000*"; 

  const audioRef = React.useRef(null);

  const [post, setPost] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/post/${postId}/`)
      .then((res) => res.json())
      .then(data => {setPost(data)})
  } ,[postId]);

  React.useEffect(() => {
    if (post && post.user_id) {
      fetch(`http://127.0.0.1:8000/api/user/${post.user_id}`)
        .then((res) => res.json())
        .then(data => {setUser(data)})
    }
  }, [post]);

  React.useEffect(() => {
    if (post && audioRef.current) {
      audioRef.current.src = post.post;
    } else if (post) {
      audioRef.current = new Audio(post.post);
    }
  }, [post]);

  React.useEffect(() => {
    if (post && audioRef.current) {
      audioRef.current.src = post.post;
    } else if (post) {
      audioRef.current = new Audio(post.post);
    }
    if (audioRef.current) {
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };
      audioRef.current.ontimeupdate = () => {
        setPosition(audioRef.current.currentTime);
      };
    }
  }, [post]);

  React.useEffect(() => {
    if (audioRef.current) {
      isPause ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPause]);

  React.useEffect(() => {
    if (audioRef.current) {
      const handleSongEnd = () => {
        if (isRepeat === 0) {
          setIsPause(true);
        } else if (isRepeat === 1) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        } else if (isRepeat === 2) {
          audioRef.current.currentTime = 0;
          audioRef.current.play();
        }
      }
      audioRef.current.addEventListener('ended', handleSongEnd);
      return () => {
        audioRef.current.removeEventListener('ended', handleSongEnd);
      }
    }
  }, [audioRef.current])

  const [draggingValue, setDraggingValue] = React.useState(null);

  const handlePositionChange = (event, newPosition) => {
    setDraggingValue(newPosition);
  };
  
  const handlePositionChangeCommitted = (event, newPosition) => {
    setPosition(newPosition);
    if (audioRef.current) {
      audioRef.current.currentTime = newPosition;
    }
    setDraggingValue(null);
  };

  return (
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
