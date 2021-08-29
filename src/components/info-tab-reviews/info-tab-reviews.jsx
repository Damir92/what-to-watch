import React from 'react';
import PropTypes from 'prop-types';

import {getComputerDate, getHumanDate} from '../../utils';
import {reviewPropTypes} from '../../prop-types';

const InfoTabReviews = ({reviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        { reviews.map((item, index) => {
          if (!(index % 2)) {
            return ``;
          }
          return (
            <div className="review" key={ item.id }>
              <blockquote className="review__quote">
                <p className="review__text">{ item.comment }</p>

                <footer className="review__details">
                  <cite className="review__author">{ item.user.name }</cite>
                  <time className="review__date" dateTime={ getComputerDate(item.date) }>{ getHumanDate(item.date) }</time>
                </footer>
              </blockquote>

              <div className="review__rating">{ item.rating }</div>
            </div>
          );
        }) }

      </div>

      <div className="movie-card__reviews-col">

        { reviews.map((item, index) => {
          if (index % 2) {
            return ``;
          }
          return (
            <div className="review" key={ item.id }>
              <blockquote className="review__quote">
                <p className="review__text">{ item.comment }</p>

                <footer className="review__details">
                  <cite className="review__author">{ item.user.name }</cite>
                  <time className="review__date" dateTime={ getComputerDate(item.date) }>{ getHumanDate(item.date) }</time>
                </footer>
              </blockquote>

              <div className="review__rating">{ item.rating }</div>
            </div>
          );
        }) }

      </div>
    </div>
  );
};

InfoTabReviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired
  ).isRequired,
};

export default InfoTabReviews;
