import React from 'react';
import {render} from 'react-dom';
import './style/index.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './components/Home/Home';
import SavedWorlds from './components/SavedWorlds/SavedWorlds';
import WorldScreen from './components/WorldScreen/WorldScreen';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myWorlds : JSON.parse(localStorage.getItem('myWorlds')) || []
    }
  }

  addNewWorld = (worldName) => {
    let newWorld = {};
    newWorld.worldName = worldName;
    newWorld.locations = [];
    this.setState({
      myWorlds: [...this.state.myWorlds, newWorld]
    }, () => localStorage.setItem('myWorlds', JSON.stringify(this.state.myWorlds)));
  }

  addNewLocation = (locationName, locationCoords, worldIndex) => {
    let myWorldsCopy = [...this.state.myWorlds];
    let newLocation = {};
    newLocation.name = locationName;
    newLocation.coords = locationCoords;
    myWorldsCopy[worldIndex].locations.push(newLocation);
    this.setState({
      myWorlds: myWorldsCopy
    },() => {
      localStorage.setItem('myWorlds', JSON.stringify(this.state.myWorlds))
    });
  }

  removeLocation = (worldIndex, locationIndex) => {
    let myWorldsCopy = [...this.state.myWorlds];
    myWorldsCopy[worldIndex].locations.splice(locationIndex, 1);
    this.setState({
      myWorlds: myWorldsCopy
    },() => {
      localStorage.setItem('myWorlds', JSON.stringify(this.state.myWorlds))
    });
  }

  render() {
    return (
      <span>
        <Switch>
          <Route exact={true} path="/" component={ () => <Home addNewWorld={this.addNewWorld} myWorlds={this.state.myWorlds} /> } />
          <Route exact={true} path="/saved-worlds" component={ () => <SavedWorlds myWorlds={this.state.myWorlds} /> } />
          {this.state.myWorlds.map((world, index) => <Route exact={true} path={`/saved-worlds/${world.worldName}`} key={index} render={props => <WorldScreen myWorlds={this.state.myWorlds} index={index} addNewLocation={this.addNewLocation} removeLocation={this.removeLocation} />} /> )}
        </Switch>
      </span>
    )
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.querySelector('#app'));