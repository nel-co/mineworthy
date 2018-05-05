import React, { Component } from 'react';
import './NewLocation.css';

export default class NewLocation extends Component {

  handleClick = (e) => {
    if(e.target === document.querySelector('.form-modal') || e.target === document.querySelector('.form-modal .container') || e.target === document.querySelector('.modal-close')) {
      this.props.toggleAddingLocation();
    }
  }

  handleNewLocationClick = () => {
    if(document.querySelector('#new-location-name').value.length > 0 && document.querySelector('#new-location-coords').value.length > 0) {
      this.props.addNewLocation(document.querySelector('#new-location-name').value, document.querySelector('#new-location-coords').value, this.props.index);
      this.props.toggleAddingLocation();
    }
  }

  handleEnterKey = (e) => {
    if(e.key === 'Enter') {
      this.handleNewLocationClick();
    }
  }

  render() {
    return (
      <div className="form-modal" onClick={this.handleClick}>
        <div className="container">
          <div className="form-wrapper">
            <input type="text" id="new-location-name" placeholder="TITLE" onKeyPress={this.handleEnterKey} />
            <input type="text" id="new-location-coords" placeholder="COORDINATES" onKeyPress={this.handleEnterKey} />            
            <button id="new-location-save" onClick={this.handleNewLocationClick}>Save COORDS</button>
            <span className="modal-close">X</span>
          </div>
        </div>
      </div>
    );
  }
}