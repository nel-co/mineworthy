import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import './SavedWorlds.css';

export default class SavedWorlds extends Component {
  render() {
    return(
      <div className="saved-worlds container">
        <div className="logo-block">
          <Link exact to="/"><img src={Logo} alt="mineworthy logo" /></Link>
          <span>Saved Worlds</span>
        </div>
        <div className="saved-worlds-list">
          {this.props.myWorlds.reverse().map((world, index) => {
            return (
              <Link to={`/saved-worlds/${world.worldName}`} className="saved-world" key={index}>{world.worldName}</Link>
            );
          })}
        </div>
      </div>
    );
  }
}