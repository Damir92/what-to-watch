import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import SmallCardsList from '../small-cards-list/small-cards-list';

import {filmPropTypes, reviewPropTypes} from '../../prop-types';
import {useRouteMatch} from 'react-router-dom';
import {Routes} from '../../const';
import InfoTabs from '../info-tabs/info-tabs';

const FilmPage = ({films, reviews}) => {
  const match = useRouteMatch();
  const mainFilm = films.find((item) => item.id === +match.params.id);
  const filmsList = films.filter((item) => item.genre === mainFilm.genre && item.id !== mainFilm.id).slice(0, 4);

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={ mainFilm.backgroundImage } alt={ mainFilm.name } />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <Link
                className="logo__link"
                to={ Routes.MAIN }
              >
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{ mainFilm.name }</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{ mainFilm.genre }</span>
                <span className="movie-card__year">{ mainFilm.released }</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link
                  className="btn movie-card__button"
                  to={ `/films/` + mainFilm.id + `/review` }
                >
                  Add review
                </Link>
                <a href="add-review.html" ></a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={ mainFilm.posterImage } alt={ mainFilm.name } width="218" height="327" />
            </div>

            <InfoTabs
              film={ mainFilm }
              reviews={ reviews }
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <SmallCardsList
            films={ filmsList }
          />

        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

FilmPage.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes).isRequired
  ).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.shape(reviewPropTypes).isRequired
  ).isRequired,
};

export default FilmPage;
