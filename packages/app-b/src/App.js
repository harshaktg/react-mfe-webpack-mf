import React, { useState } from 'react';
import NameGroup from './components/NameGroup';
const BlueContainer = React.lazy(() => import('app_c/BlueContainer'));

const App = () => {
  const [load, setLoad] = useState(false);
  return (
    <>
      <div>
        App B contains Input components!
        <div>
          <NameGroup />
        </div>
      </div>
      <input
        type="button"
        value="Load from App A and C"
        onClick={() => setLoad(!load)}
      ></input>
      {load && (
        <React.Suspense fallback="Loading ...">
          <BlueContainer>
            <p>I am loading in App B</p>
            <NameGroup />
          </BlueContainer>
        </React.Suspense>
      )}
    </>
  );
};

export default App;
