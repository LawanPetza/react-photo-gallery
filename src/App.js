import React, { Component } from 'react';
import './App.css';
import Gallery from 'react-photo-gallery';
import MyGallery from './components/Gallery';


class App extends Component {
  render() {
    return (
      <div className="img-container">
      <div className="img">

      <Gallery photos={MyGallery} />


      </div>
      </div>
    );
  }
}

export default App;
