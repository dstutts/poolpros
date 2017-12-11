import React, { Component } from 'react';

class Modal extends Component {
	
		render(){

			return (
                <div>
                    <div id="myModal" className="modal">
                        <div className="email__top-row">
                            <div className="row">
                                <div> 
                                    <div className="columns small-3">        
                                        <h2 className="email__header  text-center">EMAIL</h2>
                                    </div> 
                                    <div className="columns small-1">
                                        <button onClick={(event) => {this.props.emailClick(event)}} className="modal__exit">X</button>
                                    </div> 
                                </div>
                            </div>
                            <div className="row">        
                                <div className="columns">
                                    <h3 className="__company-name">Premium Pools &amp; Spas of Charlotte</h3>
                                </div>
                            </div>    
                        </div>
                        <div className="modal__below-the-header">  
                            <div className="row">
                                <div className="columns">
                                    <p className="modal__instructions">Fill out the form below and Premium Pools & Spas of Charlotte will get in touch.</p>
                                    <form className="modal__form" method="POST">
                                        <label className="modal__label">First and last name
                                            <input className="modal__accurate" type="checkbox" />
                                        </label>     
                                        <input className="modal__input--name" type="text" placeholder="Jane Smith"/>
                                        <label className="modal__label">Phone number
                                            <input className="modal__accurate" type="checkbox" />
                                        </label>
                                        <input type="text" className="modal__input--phone"/>
                                        <label className="modal__label">modal address
                                            <input className="modal__accurate" type="checkbox" />
                                        </label>
                                        <input type="text" className="modal__input--modal"/>
                                        <label className="modal__label">Comments or questions<span className="modal__optional">optional</span></label>
                                        <textarea className="modal__input--comment" rows="2" cols="50">       
                                        </textarea>  
                                        <div className="modal__question--section">
                                            <p className="modal__question--the-question">
                                                Do you currently own a pool or spa?
                                                <span className="modal__optional">optional</span>
                                            </p>
                                            <button className="modal__question--yes">Yes</button>
                                            <button className="modal__question--no">No</button>
                                        </div>     
                                        <button className="modal__button  show-for-medium-up text-center">
                                            <input className="modal__send-email  " type="submit" value="Send my email" />
                                            <i className="modal__right-arrow  fa fa-chevron-right" aria-hidden="true"></i>
                                        </button>
                                        <input className="modal__send-modal--small  show-for-small-only" value="Send"/>
                                    </form> 
                                </div>
                            </div>        
                            <div className="modal__subtext  row show-for-medium-up">
                                <div className="columns">        
                                    <p className="modal__subtext--text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>   
                                </div>        
                            </div>
                        </div>     
                    </div>    
                </div>      
			);
		  }     
	  }  
	  export default Email;