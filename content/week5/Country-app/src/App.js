import "./App.css";
import React from "react";
import CountryList from "./Countrylist.js";
import CountryData from "./Countrydata.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getCountryData() {}
  render() {
    return (
      <div className="App">
        <CountryList />
      </div>
    );
  }
}

export default App;
