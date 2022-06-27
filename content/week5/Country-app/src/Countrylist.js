import React from "react";
import "./App.css";
import CountryData from "./Countrydata";

class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryData: null,

      country: {
        name: "Please Pick a Country, Warning!",
        capital: "You need to pick a country",
        source:
          "https://www.onlygfx.com/wp-content/uploads/2017/12/warning-stamp-1.png",
        population: "You need to pick a country",
      },
      countries: ["United Kingdom", "France", "Germany", "Spain"],
    };
    this.handelEvent = this.handelEvent.bind(this);
  }

  async componentDidMount() {
    const apiResponse = await fetch(
      "https://restcountries.com/v3.1/region/europe"
    );
    const countryData = await apiResponse.json();
    this.setState({ countryData: countryData });
  }

  handelEvent = (e) => {
    e.preventDefault();
    let targetCountry = JSON.parse(e.target.value);
    this.setState({
      country: {
        name: targetCountry.name.common,
        capital: targetCountry.capital[0],
        source: targetCountry.flags.png,
        population: targetCountry.population,
      },
    });
  };

  count() {
    if (!this.state.countryData) {
      return <h3>Loading....</h3>;
    }
    const a = this.state.countryData;
    let countryList = a.map((countryName) => {
      return (
        <li key={countryName.name.common}>
          <button
            className="country-button"
            onClick={this.handelEvent}
            value={JSON.stringify(countryName)}
          >
            {countryName.name.common}
          </button>
        </li>
      );
    });

    return countryList;
  }

  CountryData() {
    let country = this.state.country;
    return <CountryData country={country} />;
  }

  render() {
    return (
      <div className="da">
        <h1>Countries</h1>
        <div className="main-split">
          <div className="countries-list">
            <ul>{this.count()}</ul>
          </div>
          <div className="countries-data">{this.CountryData()}</div>
        </div>
      </div>
    );
  }
}

export default CountryList;
