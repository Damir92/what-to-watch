import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Routes } from '../../const/routes';

import MainPage from '../main-page/main-page';
import SingInPage from '../sign-in-page/sing-in-page';
import MyListPage from '../my-list-page/my-list-page'
import FilmPage from '../film-page/film-page';
import AddReviewPage from '../add-review-page/add-review-page'
import PlayerPage from '../player-page/player-page';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ Routes.MAIN }>
          <MainPage/>
        </Route>
        <Route exact path={ Routes.LOGIN }>
          <SingInPage/>
        </Route>
        <Route exact path={ Routes.MY_LIST }>
          <MyListPage/>
        </Route>
        <Route exact path={ Routes.FILM }>
          <FilmPage/>
        </Route>
        <Route exact path={ Routes.ADD_REVIEW }>
          <AddReviewPage/>
        </Route>
        <Route exact path={ Routes.PLAYER }>
          <PlayerPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
