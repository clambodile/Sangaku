import React from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Title';
import Sangaku from './components/Sangaku';

export default function App() {
  return (
    <div>
      <Title />
      <Sangaku name="first" height={1300} width={1300} />
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
