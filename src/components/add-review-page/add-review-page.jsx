import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {filmPropTypes} from '../../prop-types';
import {useRouteMatch} from 'react-router-dom';

const AddReviewPage = ({films}) => {
  const match = useRouteMatch();
  const film = films.find((item) => item.id === +match.params.id);

  const [rating, setRating] = useState(1);
  const [review, setReview] = useState(``);

  const handleChangeRating = (evt) => {
    const value = +evt.target.value;
    setRating(value);
  };

  const handleChangeReview = (evt) => {
    const value = evt.target.value;
    setReview(value);
  };

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={ film.backgroundImage } alt={ film.name } />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  className="breadcrumbs__link"
                  to={ `/films/` + film.id }
                >
                  { film.name }
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={ film.posterImage } alt={ film.name } width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#" className="add-review__form"
          onSubmit={() => {}}
        >
          <div className="rating">
            <div className="rating__stars">
              <input
                className="rating__input"
                id="star-1"
                type="radio"
                name="rating"
                value="1"
                onChange={ handleChangeRating }
                checked={ rating === 1 }
              />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input
                className="rating__input"
                id="star-2"
                type="radio"
                name="rating"
                value="2"
                onChange={ handleChangeRating }
                checked={ rating === 2 }
              />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input
                className="rating__input"
                id="star-3"
                type="radio"
                name="rating"
                value="3"
                onChange={ handleChangeRating }
                checked={ rating === 3 }
              />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input
                className="rating__input"
                id="star-4"
                type="radio"
                name="rating"
                value="4"
                onChange={ handleChangeRating }
                checked={ rating === 4 }
              />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input
                className="rating__input"
                id="star-5"
                type="radio"
                name="rating"
                value="5"
                onChange={ handleChangeRating }
                checked={ rating === 5 }
              />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              value={ review }
              onChange={ handleChangeReview }
            />
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );
};

AddReviewPage.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes).isRequired
  ).isRequired,
};

export default AddReviewPage;
