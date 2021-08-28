import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import {films, filmPromo} from './mocks/films';
// import { transformFilmObject } from './utils';

// const filmsTransformed = films.map(item => transformFilmObject(item));
// const filmPromoTransformed = transformFilmObject(filmPromo);

ReactDOM.render(
    <App films={ films } filmPromo={ filmPromo } />,
    document.querySelector(`#root`)
);
