import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {getFilmRating} from '../../utils';

const InfoTabOverview = ({rating, scoresCount, description, director, starring}) => {
  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{ rating }</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ getFilmRating(rating) }</span>
          <span className="movie-rating__count">{ scoresCount } ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{ description }</p>

        <p className="movie-card__director"><strong>Director: { director }</strong></p>

        <p className="movie-card__starring"><strong>Starring: { starring.join(`, `) }</strong></p>
      </div>
    </Fragment>
  );
};

InfoTabOverview.propTypes = {
  rating: PropTypes.number.isRequired,
  scoresCount: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default InfoTabOverview;
