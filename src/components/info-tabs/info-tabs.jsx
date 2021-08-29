import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {FilmPageTabs} from '../../const';
import {filmPropTypes, reviewPropTypes} from '../../prop-types';
import InfoTabOverview from '../info-tab-overview/info-tab-overview';
import InfoTabDetails from '../info-tab-details/info-tab-details';
import InfoTabReviews from '../info-tab-reviews/info-tab-reviews';

const InfoTabs = ({film, reviews}) => {
  const [activeTab, setActiveTab] = useState(FilmPageTabs.OVERVIEW.key);

  const handleTabClick = (evt) => {
    evt.preventDefault();

    const link = evt.target.getAttribute(`data-link`);
    setActiveTab(link);
  };

  const getTabValueComponent = () => {
    switch (activeTab) {
      case FilmPageTabs.OVERVIEW.key:
        return <InfoTabOverview
          rating={ film.rating }
          scoresCount={ film.scoresCount }
          description={ film.description }
          director={ film.director }
          starring={ film.starring }
        />;
      case FilmPageTabs.DETAILS.key:
        return <InfoTabDetails
          director={ film.director }
          starring={ film.starring }
          runTime={ film.runTime }
          genre={ film.genre }
          released={ film.released }
        />;
      case FilmPageTabs.REVIEWS.key:
        return <InfoTabReviews
          reviews={ reviews }
        />;
      default:
        return null;
    }
  };

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li className={`movie-nav__item ${activeTab === FilmPageTabs.OVERVIEW.key ? ` movie-nav__item--active` : ``}`}>
            <a
              href="#"
              className="movie-nav__link"
              data-link={ FilmPageTabs.OVERVIEW.key }
              onClick={ handleTabClick }
            >
              { FilmPageTabs.OVERVIEW.title }
            </a>
          </li>
          <li className={`movie-nav__item ${activeTab === FilmPageTabs.DETAILS.key ? ` movie-nav__item--active` : ``}`}>
            <a
              href="#"
              className="movie-nav__link"
              data-link={ FilmPageTabs.DETAILS.key }
              onClick={ handleTabClick }
            >
              { FilmPageTabs.DETAILS.title }
            </a>
          </li>
          <li className={`movie-nav__item ${activeTab === FilmPageTabs.REVIEWS.key ? ` movie-nav__item--active` : ``}`}>
            <a
              href="#"
              className="movie-nav__link"
              data-link={ FilmPageTabs.REVIEWS.key }
              onClick={ handleTabClick }
            >
              { FilmPageTabs.REVIEWS.title }
            </a>
          </li>
        </ul>
      </nav>

      { getTabValueComponent() }
    </div>
  );
};

InfoTabs.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired
  ).isRequired,
};

export default InfoTabs;
