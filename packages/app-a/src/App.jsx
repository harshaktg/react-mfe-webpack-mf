import React, { useState } from 'react';
import ButtonGroup from './components/ButtonGroup';
const BlueContainer = React.lazy(() => import('app_c/BlueContainer'));
const RedContainer = React.lazy(() => import('app_c/RedContainer'));

const App = () => {
  const [color, setColor] = useState('blue');
  return (
    <div>
      App A contains button components!
      <div>
        <ButtonGroup setColor={setColor} />
      </div>
      <div>It also uses the container components from App C!</div>
      {color === 'blue' ? (
        <React.Suspense fallback="Loading...">
          <BlueContainer />
        </React.Suspense>
      ) : (
        <React.Suspense fallback="Loading...">
          <RedContainer />
        </React.Suspense>
      )}
    </div>
  );
};

export default App;
