import React from "react";
import ReactDOM from "react-dom";
import { SeasonDisplay } from './components/SeasonDisplay'
import { Spinner } from './components/Spinner'

// Comments for process only

// rcjc = Class based component

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
/*   constructor(props) {
    super(props);
    // init state
    this.state = {
      lat: null,
      long: null,
      errorMessage: "",
    };
  } */
  state = { lat: null, long: null, errorMessage: "" };

  componentDidMount() {
    console.log("1 - comp rendered to screen");
    window.navigator.geolocation.getCurrentPosition(
      // (position) => console.log("my position is:", position),
      // call setState to update state object
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
        (err) => this.setState({ errorMessage: err.message })
        // (err) => console.log("Houston, we have an error:", err)
    );
  }

/*   componentDidUpdate() {
    console.log("2 - comp just updated");
  } */

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }
    // return <Spinner />;
    return <Spinner message="Getting Geo-location - Please accept location request"/>;
  }

  // req by React: 'render()'
  render() {
    return (
      <div className="style-everything-inside">
        {this.renderContent()}
      </div>
    )
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
