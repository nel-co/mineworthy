import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import NewLocation from '../NewLocation/NewLocation';
import './WorldScreen.css';

const colors = [
  '#ee3706',
  '#9dc862',
  '#10c0a7',
  '#c01088'
];

export default class WorldScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingLocation: false
    }
  }

  toggleAddingLocation = () => {
    this.setState({
      addingLocation: !this.state.addingLocation
    });
  }

  handleEnterKey = (e) => {
    if(e.key === 'Enter') {
      this.toggleAddingLocation();  
    }
  }
  
  render() {
    const WorldScreen = (
      <div className="world-screen container">
        <div className="logo-block">
          <Link exact="true" to="/"><img src={Logo} alt="mineworthy logo" /></Link>
          <span>{this.props.myWorlds[this.props.index].worldName}</span>
        </div>
        <div className="saved-locations">
          {this.props.myWorlds[this.props.index].locations.reverse().map((location, index) => {
            return (
              <div className="location" key={index}>
                <span>{location.name}</span>
                <span>{location.coords}</span>
                <span className="location-remove" onClick={() => this.props.removeLocation(this.props.index, index)}>X</span>
              </div>
            );
          })}
          <div className="location location-add" tabIndex="0" onKeyPress={this.handleEnterKey} onClick={this.toggleAddingLocation}>
            <span>+</span>
            <span>Add location</span>
          </div>
        </div>
      </div>
    );
    return (
      this.state.addingLocation ? <NewLocation toggleAddingLocation={this.toggleAddingLocation} addNewLocation={this.props.addNewLocation} index={this.props.index} /> : WorldScreen
    );
  }
}