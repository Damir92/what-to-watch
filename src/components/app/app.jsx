import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Routes} from '../../const';

import MainPage from '../main-page/main-page';
import SingInPage from '../sign-in-page/sing-in-page';
import MyListPage from '../my-list-page/my-list-page';
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page';
import PlayerPage from '../player-page/player-page';

import {filmPropTypes} from '../../prop-types';

const App = ({films, filmPromo}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ Routes.MAIN }>
          <MainPage films={ films.slice(0, 8) } filmPromo={ filmPromo } />
        </Route>
        <Route exact path={ Routes.LOGIN }>
          <SingInPage/>
        </Route>
        <Route exact path={ Routes.MY_LIST }>
          <MyListPage films={ films.slice(0, 8) } />
        </Route>
        <Route exact path={ Routes.FILM }>
          <FilmPage films={ films } />
        </Route>
        <Route exact path={ Routes.ADD_REVIEW } >
          <AddReviewPage films={ films } />
        </Route>
        <Route exact path={ Routes.PLAYER }>
          <PlayerPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(filmPropTypes).isRequired
  ).isRequired,
  filmPromo: PropTypes.shape(filmPropTypes).isRequired,
};

export default App;
