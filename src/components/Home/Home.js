import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png';
import './Home.css';

import NewWorld from '../NewWorld/NewWorld';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      addingWorld: false
    }
  }

  toggleAddingWorld = () => {
    this.setState({
      addingWorld: !this.state.addingWorld
    });
  }

  render() {
    const HomeMenu = (
      <div className="home container">
        <div className="logo-block">
          <img src={Logo} alt="mineworthy logo" />
          <span>Save your coordinates</span>
        </div>
        <div className="home-btn-block">
          <button onClick={this.toggleAddingWorld}>New World</button>
          {this.props.myWorlds.length > 0 ? <Link to="/saved-worlds">My Worlds</Link> : null}
        </div>
      </div>
    );
    return this.state.addingWorld ? <NewWorld toggleAddingWorld={this.toggleAddingWorld} addNewWorld={this.props.addNewWorld} /> : HomeMenu;
  }
}