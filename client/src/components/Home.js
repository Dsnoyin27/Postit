import React from 'react';

const HomeComponent = () =>
  <div
    className="ui inverted vertical masthead center aligned segment"
    style={{ minHeight: '100vh', padding: '1em 0em' }}
  >

    <div className="ui text container">
      <h1
        className="ui inverted header"
        style={{ marginTop: '3em', fontSize: '4em' }}
      >
        Postit App
      </h1>
      <h2>Do whatever you want when you want to.</h2>
      <div className="ui huge primary button">
        Get Started <i className="right arrow icon" />
      </div>
    </div>
  </div>;

export default HomeComponent;
