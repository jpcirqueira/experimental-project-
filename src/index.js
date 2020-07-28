import React from 'react';
import ReactDOM from 'react-dom';

import AddList from './components/addList';
import TestFormik from '../src/components/testformik/index';
import QuillRichText from '../src/components/testQuill/index';

ReactDOM.render(
  <React.StrictMode>
    <QuillRichText />
  </React.StrictMode>,
  document.getElementById('root')
);

