import React, { Component } from 'react';
import './assets/css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="mobile-render">
        <div className="section section--header">
          <div className="row">
            <div className="columns small-6">
              <img className="logo" src="./img/logo.jpg" alt="logo"/>
            </div>
            <div className="columns small-4">
              <a href="#" className="button button__mobile">
                FIND A PRO 
              </a>
            </div>
            <div className="columns small-2">
              <div className="burger">
                <img className="burger__image" src="./img/burger.svg" alt="burger"/>
              </div>
            </div>
          </div>
        </div>
        <div className="section section--banner">
        </div>
        <section className="section section--filter">
          <div className="filter">
            <div className="columns small-6">
              <div className="filter__results">7 results in 28266
              </div>
            </div>
            <div className="columns small-6">
              <div className="dropdown">
                <div className="dropdown__text">
                  Filter Results
                </div>
                <div className="dropdown__arrow">
                  <a href="#" className="dropdown__link">v</a>
                </div>
                <div className="dropdown__content">
                  <div>
                    <input type="checkbox" id="service" name="subscribe" value="newsletter"/>
                    <label htmlFor="service">Service</label>
                  </div>
                  <div>
                    <input type="checkbox" id="install" name="install" value="newsletter"/>
                    <label htmlFor="install">Installation</label>
                  </div>
                  <div>
                    <input type="checkbox" id="residential" name="residential" value="newsletter"/>
                    <label htmlFor="residential">Residential</label>
                  </div>
                  <div>
                    <input type="checkbox" id="commercial" name="commercial" value="newsletter"/>
                    <label htmlFor="commercial">Commercial</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
    );
  }
}

export default App;
