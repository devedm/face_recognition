import React, {Component} from 'react';
import 'tachyons';
import './App.css'
import Navigation from './components/Navigation/Navigation.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: "53c49abb0a704cafa4a24576850c9cff",
 });


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    
    app.models.predict(Clarifai.FACE_DETECT_MODEL, 'https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp')
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
    
  }

  render() {
    return (
      <div className='App'>
        {/* <Particles
        params={particlesOptions}
        /> */}
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
          onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
  
}

export default App;
