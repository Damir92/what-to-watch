import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page';

const App = ({leadInfo}) => {
  return (
    <MainPage
      leadInfo={leadInfo}
    />
  );
};

App.propTypes = {
  leadInfo: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
  }),
};

export default App;
