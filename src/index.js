import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import {films, filmPromo} from './mocks/films';
import {reviews} from './mocks/reviews';
// import { transformFilmObject } from './utils';

// const filmsTransformed = films.map(item => transformFilmObject(item));
// const filmPromoTransformed = transformFilmObject(filmPromo);

ReactDOM.render(
    <App films={ films } filmPromo={ filmPromo } reviews={ reviews } />,
    document.querySelector(`#root`)
);
