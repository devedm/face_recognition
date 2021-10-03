import React, {Component} from 'react';
import Particles from 'react-particles-js';
import 'tachyons';
import './App.css'
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';


const particlesOptions = {
    particles: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
}
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Particles
        params={particlesOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
      </div>
    );
  }
  
}

export default App;
