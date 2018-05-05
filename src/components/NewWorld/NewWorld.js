import React, { Component } from 'react';
import './NewWorld.css';

export default class NewWorld extends Component {

  handleClick = (e) => {
    if(e.target === document.querySelector('.form-modal') || e.target === document.querySelector('.form-modal .container') || e.target === document.querySelector('.modal-close')) {
      this.props.toggleAddingWorld();
    }
  }

  handleNewWorldClick = () => {
    if(document.querySelector('#new-world-name').value.length > 0) {
      this.props.addNewWorld(document.querySelector('#new-world-name').value);
      this.props.toggleAddingWorld();      
    }
  }

  handleEnterKey = (e) => {
    if(e.key === 'Enter') {
      this.handleNewWorldClick();
    }
  }

  render() {
    return (
      <div className="form-modal" onClick={this.handleClick}>
        <div className="container">
          <div className="form-wrapper">
            <input type="text" id="new-world-name" placeholder="ENTER WORLD NAME" onKeyPress={this.handleEnterKey} />
            <button id="new-world-save" onClick={this.handleNewWorldClick}>Save World</button>
            <span className="modal-close">X</span>
          </div>
        </div>
      </div>
    );
  }
}