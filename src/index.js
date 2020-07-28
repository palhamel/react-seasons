import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from './components/SeasonDisplay'

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    // the success callback:
    (position) => console.log('my position is:', position),
    // failure callback:
    (err) => console.log('Houston, we have an error:', err)
  );

  return <div>react setup complete</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
