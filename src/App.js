import React, { Component } from 'react';
import './App.css';
import Gallery from 'react-photo-gallery';
import MyGallery from './components/Gallery';


class App extends Component {
  render() {
    return (
      <div className="img">
      <div className="img-container">

      <Gallery photos={MyGallery} direction={"column"} />


      </div>
      </div>
    );
  }
}

export default App;
