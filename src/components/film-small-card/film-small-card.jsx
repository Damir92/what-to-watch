import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {filmPropTypes} from '../../prop-types';

const FilmSmallCard = ({film}) => {
  const {
    id,
    name,
    previewImage,
  } = film;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img
          src={previewImage}
          alt={name}
          width="280"
          height="175"
        />
        {/* <video
          src={previewVideoLink}
          width="280"
          height="175"
          controls
        /> */}
      </div>
      <h3 className="small-movie-card__title">
        <Link
          className="small-movie-card__link"
          to={`/films/` + id}
        >
          {name}
        </Link>
        {/* <a
          className="small-movie-card__link"
          href={`/films/` + id}
        >
          {name}
        </a> */}
      </h3>
    </article>
  );
};

FilmSmallCard.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
};

export default FilmSmallCard;
