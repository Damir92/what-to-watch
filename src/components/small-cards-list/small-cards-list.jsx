import React from 'react';
import PropTypes from 'prop-types';

import FilmSmallCard from '../film-small-card/film-small-card';

import {filmPropTypes} from '../../prop-types';

const SmallCardsList = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <FilmSmallCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
};

SmallCardsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes).isRequired
  ).isRequired,
};

export default SmallCardsList;
