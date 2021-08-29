import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {getRunTime} from '../../utils';

const InfoTabDetails = ({director, starring, runTime, genre, released}) => {
  const getStarringList = () => {
    return starring.map((item, index) => {
      if (index !== starring.length - 1) {
        return <Fragment key={ index }>{ item }, <br/></Fragment>;
      }
      return <Fragment key={ index }>{ item }</Fragment>;
    });
  };

  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{ director }</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            { getStarringList() }
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{ getRunTime(runTime) }</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{ genre }</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{ released }</span>
        </p>
      </div>
    </div>
  );
};

InfoTabDetails.propTypes = {
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  runTime: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  released: PropTypes.number.isRequired,
};

export default InfoTabDetails;
