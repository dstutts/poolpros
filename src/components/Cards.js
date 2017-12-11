import React, { Component } from 'react';
import _ from 'lodash';

class Cards extends Component {
    constructor() {
      super();
      this.renderCards = this.renderCards.bind(this);
      this.renderCertifications = this.renderCertifications.bind(this);
    }

    renderCertifications(card) {
        const certificationImages = this.props.certImages;
        const certifications = card.data.certifications;
        let certificationsArray = [];
        
        certifications.forEach((elem, index) => {
            certificationsArray.push(
                    <li className="card__item" key={index}>
                        <img className="card__icon"
                        src={certificationImages[elem]}/>
                        {elem}
                    </li>
                );
        });
        
        return certificationsArray;
    }

    // Map over products' state  to list each item
    renderCards() {
        var cards = _.map(this.props.list, (card, index) => {
            return <div key={index}>
                        <div className="columns large-4 card-column">
                            <div className="card">
                                <h3 className="card__title">{card.data.name}</h3>
                                <a href="#" className="button button--card">
                                <div className="card__phone">
                                    <i className="fa fa-phone"/>
                                </div>
                                <p className="card__text--small">
                                    Tap to call
                                </p>
                                <p className="card__text--large">
                                    {card.data.phone1}
                                </p>
                                </a>                  
                                <p className="card__text--italic">Can’t talk now? Click below to send an email.
                                </p>
                                <div className="card__contact">
                                    <i className="fa fa-envelope"/>Contact this pro
                                </div>
                                <div className="card__business">
                                    <p className="card__hours">Business Hours</p>
                                    <p className="card__hours">Weekdays {card.data.weekHours.mon}</p>
                                    <p className="card__hours">Saturdays {card.data.weekHours.sat}</p>
                                    <p className="card__hours">Sundays - {card.data.weekHours.sun ? card.data.weekHours.sun : "Closed"}</p>
                                </div>
                                <div className="card__tags">
                                    <ul className="card__pro inline-list">
                                        {this.renderCertifications(card)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                });
                return cards;
            }

    render() {
      return (
        <div>
            {/* <ul className = 'card__list'> */}
           {this.renderCards()}
           {/* </ul> */}
        </div>
      );
    }
  }

  export default Cards;