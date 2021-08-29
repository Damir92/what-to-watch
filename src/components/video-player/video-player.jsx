import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({
  src,
  poster,
  muted = false,
  loop = false,
}) => {
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  const handleFocus = () => {
    setIsPlaying(true);
  };

  const handleBlur = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const video = videoRef.current;

    video.src = src;
  }, []);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [isPlaying]);

  return (
    <div
      className="small-movie-card__image"
      onMouseEnter={ handleFocus }
      onMouseOut={ handleBlur }
    >
      <video
        style={{objectFit: `cover`, width: `100%`, height: `100%`}}
        ref={ videoRef }
        src={ src }
        poster={ poster }
        muted={ muted }
        loop={ loop }
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool,
  loop: PropTypes.bool,
};

export default VideoPlayer;
