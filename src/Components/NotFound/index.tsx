import * as React from 'react';

import './NotFound.scss';

const NotFound: React.FC = () => (
  <div className='not-found'>
    <h1 className='not-found__404'>404!</h1>
    <h1 className='not-found__text'>
      Sorry, this page does not exist.
    </h1>
  </div>
);

export default NotFound;
