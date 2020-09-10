import React from 'react';
import BlueContainer from './containers/BlueContainer';
const NameGroup = React.lazy(() => import('app_b/NameGroup'));

const App = () => (
  <div>
    App C contains colourful containers!
    <BlueContainer>
      <React.Suspense fallback="Loading text...">
        <NameGroup />
      </React.Suspense>
    </BlueContainer>
  </div>
);

export default App;
