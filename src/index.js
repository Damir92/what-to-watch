import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

const leadInfo = {
  name: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};

ReactDOM.render(
    <App
      leadInfo={leadInfo}
    />,
    document.querySelector(`#root`)
);
