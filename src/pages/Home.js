import React from "react";
import { Link } from "react-router-dom";

import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from '../assets/new-beer.png'

const Home = () => {
  return (
    <div className="home">
      <Link to="/beers">
        <img
          src={beers}
          alt="all-beers"
          style={{ marginBottom: 10, marginTop: 20 }}
        />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Link>
      <Link to="/random-beer">
        <img
          src={randomBeer}
          alt="random-beer"
          style={{ marginBottom: 10, marginTop: 30 }}
        />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Link>
      <Link to="/new-beer">
        <img
          src={newBeer}
          alt="new-beer"
          style={{ marginBottom: 10, marginTop: 30 }}
        />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Link>
    </div>
  );
};

export default Home;
