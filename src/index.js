import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from './components/SeasonDisplay'

// rcjc - Class based component:

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null,
      errorMessage: "",
    };

    window.navigator.geolocation.getCurrentPosition(
      // the success callback:
      // (position) => console.log("my position is:", position),
      (position) => {
        // call setState to update state object
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      // failure callback:
      // (err) => console.log("Houston, we have an error:", err)
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  // req by React: 'render()'

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Lat: {this.state.lat} </div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

/*
  render() {
    return (
      <div>
        <div>latitude: {this.state.lat}</div>
        <div>longitude: {this.state.long}</div>
        <div> {this.state.errorMessage} </div>
      </div>
    );
  }
}



*/

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
