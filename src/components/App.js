import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
//traer react router
function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
