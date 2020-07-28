import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from './components/SeasonDisplay'

// rcjc - Class based component:

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = { lat: null };
  }

  // req by React: 'render()'
  render() {
    window.navigator.geolocation.getCurrentPosition(
      // the success callback:
      (position) => console.log("my position is:", position),
      // failure callback:
      (err) => console.log("Houston, we have an error:", err)
    );
    return <div>latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// refactor component
// functional component:
/*

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    // the success callback:
    (position) => console.log("my position is:", position),
    // failure callback:
    (err) => console.log("Houston, we have an error:", err)
  );

  return <div>Lat:</div>;
};

*/
