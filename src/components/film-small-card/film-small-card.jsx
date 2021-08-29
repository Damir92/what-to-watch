import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import VideoPlayer from '../video-player/video-player';

import {filmPropTypes} from '../../prop-types';

const FilmSmallCard = ({film}) => {
  const {
    id,
    name,
    previewImage,
    previewVideoLink,
  } = film;

  let focusInProgress = false;

  const [showVideo, setShowVideo] = useState(false);

  const handleFocusCard = () => {
    focusInProgress = true;

    if (!showVideo) {
      setTimeout(() => {
        if (focusInProgress) {
          setShowVideo(true);
        }
      }, 1000);
    }
  };

  const handleBlurCard = () => {
    focusInProgress = false;
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={ handleFocusCard }
      onMouseOut={ handleBlurCard }
    >
      {showVideo
        ? <VideoPlayer
          src={ previewVideoLink }
          poster={ previewImage }
          muted
          loop
        />
        : <div className="small-movie-card__image">
          <img
            src={ previewImage }
            alt={ name }
            width="280"
            height="175"
          />
        </div>
      }
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/films/` + id}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
};

FilmSmallCard.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
};

export default FilmSmallCard;
