import React, { Component } from 'react';
import APOD from './components/APOD';
import SatSit from './components/SatSit';
import MarsRover from './components/MarsRover';
import EARTH from './components/Earth';
import MarsWeather from './components/MarsWeather';
import './App.css';

class App extends Component {
  

  render() { 
    return ( 
      <div className="container-sm page-container" >
      <div>
        <Header />
      </div>
      <div>
        <APOD 
        />
      </div>
      <div>
        <EARTH />
      </div>
      <div>
        <MarsRover />
      </div>
      <div>
        <MarsWeather />
      </div>
      <div>
        <SatSit />
      </div>
      <Footer />
    </div>
     );
  }
}









 
function Header() {
  return (
    <React.Fragment>
      <h3 className="py-4">SpaceNerd.io</h3>
      <p>This website is designed using open API's from Nasa.gov. Please take a look around, the source code for this project is located on the bottom of this page. Enjoy!</p>
      <hr/>
    </React.Fragment>
  )
}

function Footer() {
  return (
    <div className="my-2 footer">
      <hr />
      <form 
        action='https://www.w3docs.com'
      >
        <button className="" type='submit'>
          Source Code
        </button>
       
      </form>
    </div>
  )
}

export default App;
