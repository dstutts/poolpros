import React, { Component } from 'react';
import './assets/css/styles.css';
import data from './data.js';
import Cards from './components/Cards.js';
import axios from 'axios';
// var customData = require('./dealers.json');

class App extends Component {
  // ComponentDidMount() {
  //   this.getDealers();
  // }
  constructor() {
    super();
      this.state = {dealersData: []};
      this.getDealers();
      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
  }

  getDealers () {
    axios.get('./dealers.json')
      .then((res) => {
        console.log(res);
       this.setState({
          dealersData: res.body
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };



openModal() {
  this.setState({modalIsOpen: true});
}

afterOpenModal() {
  // references are now sync'd and can be accessed.
  this.subtitle.style.color = '#f00';
}

closeModal() {
  this.setState({modalIsOpen: false});
}


  render() {    
    return (
      <div className="mobile-render">
        <section className="section section--topheader hide-for-small-only">
          <div className="row">
            <div className="columns large-3 large-offset-9">
              <ul className="topheader__list inline-list">
                <li className="topheader__item">Dealers and Distributors</li>
                <li className="topheader__item">Commercial Service</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section section--bottomheader hide-for-small-only">
          <div className="row">
            <div className="columns large-3">
              <img className="bottomheader__logo" src="./img/pool-pros-logo.svg" alt="logo"/>
            </div>
            <div className="columns large-5 large-offset-2">
              <ul className="bottomheader__list inline-list">
                <li className="bottomheader__item">
                  Pools &amp; Spas
                </li>
                <li className="bottomheader__item">
                  Supplies
                </li>
                <li className="bottomheader__item">
                  Resources
                </li>
                <li className="bottomheader__item">
                  Services
                </li>
              </ul>
            </div>
            <div className="columns large-2">
              <a href="#" className="button button__desktop"><i className="fa fa-map-marker"/>Find a Pool Pro</a>
            </div>
          </div>
        </section>
        <div className="section section--header hide-for-medium-up">
          <div className="row">
            <div className="columns small-6">
              <img className="logo" src="./img/pool-pros-logo.svg" alt="logo"/>
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
        <section className="section section--banner">
          <div className="row">
            <div className="columns small-12">
              <div className="water-image">
              </div>
            </div>
          </div>
        </section>
        <section className="section section--filterlarge hide-for-small-only">
          <div className="row">
            <div className="filterlarge">
              <div className="columns large-2 large-offset-1">
                <div className="filterlarge__results">
                  7 Results in 28266
                </div>
              </div>
              <div className="columns large-2">
                <div className="filterlarge__title">
                  Filter Results
                </div>
              </div>
              <div className="columns large-6">
                <ul className="filterlarge__list inline-list">
                  <li>
                    <div className="filterlarge__item">
                    <label htmlFor="service">
                      <input type="checkbox" id="service" className="subscribe" value="newsletter"/>
                      <span>Service</span></label>
                    </div>
                  </li>
                    <li>
                      <div className="filterlarge__item">
                        <label htmlFor="install">
                        <input type="checkbox" id="install" className="install" value="newsletter"/>
                        <span>Installation</span></label>
                      </div>
                    </li>
                    <li>
                      <div className="filterlarge__item">
                        <label htmlFor="residential">
                        <input type="checkbox" id="residential" className="residential" value="newsletter"/>
                        <span>Residential</span></label>
                      </div>
                    </li>
                  <li>
                    <div className="filterlarge__item">
                      <label htmlFor="commercial">
                      <input type="checkbox" id="commercial" className="commercial" value="newsletter"/>
                      <span>Commercial</span></label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>    
        </section>
        <section className="section section--filter hide-for-medium-up">
          <div className="row">
            <div className="columns small-6 text-right">
              <div className="filter__results">7 results in 28266
              </div>
            </div>
            <div className="columns small-6">
              <div className="dropdown">
                <div className="dropdown__text">
                  Filter Results
                </div>
                <div className="dropdown__arrow">
                  <a href="#" className="dropdown__link"><i className="fa fa-caret-down"/></a>
                </div>
              </div>
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
        </section>
        <section className="section section--card text-center">
          <div className="row">
              <Cards
                list={this.state.dealersData}
                certImages={this.state.certificationImages}
              />
          </div>
        </section>
        <section className="section section--footer text-center">
          <div className="footer__top">
            <div className="row text-center">
              <div className="columns small-12">
                <img className="footer__image" src="./img/pool-pros-logo-footer.svg"/>
              </div>
            </div>
            <div className="row">
              <div className="columns large-2 large-offset-4 small-6">
                <p className="footer__text">CONNECT WITH US</p>
              </div>
              <div className="columns large-2 end small-4 footer__icons">
                <i className="fa fa-twitter"/>
                <i className="fa fa-facebook"/>
                <i className="fa fa-youtube"/>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="bottom">
              <div className="row hide-for-medium-up">
                <div className="columns small-6 padding-fix">
                  <p className="footer__text footer__text--small dealers">Dealers and Distributors</p>
                </div>
                <div className="columns small-6 padding-fix">
                  <p className="footer__text footer__text--small">Commercial Service<img className="footer__text footer__text--icon" src="./img/action.svg"/></p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="columns large-2 large-offset-3 small-4 padding-fix">
                <p className="footer__text footer__text--small dealers"><i className="fa fa-copyright"/>Pool Pros</p>
              </div>
              <div className="columns large-2 small-4 padding-fix">
                <p className="footer__text footer__text--small dealers">Privacy Policy</p>
              </div>  
              <div className="columns large-2 end small-4 padding-fix">
                <p className="footer__text footer__text--small">Terms and Conditions</p>
              </div>  
            </div>
          </div>
        </section>
        <div id="signin-modal" class="reveal-modal reveal-modal--signin  text-center" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
                <div className="row">

                </div>  
            </div>
      </div>
    );
  }
}

export default App;
