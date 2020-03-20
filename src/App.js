import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { 
    display: '',
    date: '',
    explanation: '',
    url: '',
    title: ''
   }

  API_KEY= '?api_key=c2dcsnMGhzrk7klXlBPx0frW6zgt3VhIauR00MBF';

  astronomyPicOfDay =  ()=> {
    fetch('https://api.nasa.gov/planetary/apod?api_key=c2dcsnMGhzrk7klXlBPx0frW6zgt3VhIauR00MBF')
    .then(response => response.json())
    .then(data => {
      const { date, explanation, url, title } = data
      this.setState({
        date: date,
        explanation: explanation,
        url: url,
        title: title
      })
    } )
  }

  render() { 
    return ( 
      <div className="container-sm" >
      <div>
        <Header />
      </div>
      <div>
        <APOD 
          astronomyPicOfDay = {this.astronomyPicOfDay()}
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

const APOD = () => {
  return (
    <React.Fragment>
       <button className="border-0" onClick= {()=> this.props.astronomyPicOfDay()}> Astronomy Pic Of The Day </button>
    </React.Fragment>
  )
}

function EARTH() {
  return (
    <React.Fragment>
      <button className="border-0"> Earch Observation Data</button>
    </React.Fragment>
  )
}

function MarsRover() {
  return (
    <React.Fragment>
      <button className="border-0">Mars Rover Photos</button>
    </React.Fragment>
  )
}

function SatSit() {
  return (
    <React.Fragment>
      <button className="border-0">Satellite Situation Center</button>
    </React.Fragment>
  )
}

function MarsWeather () {
  return (
    <React.Fragment>
      <button className="border-0">Mars Weather</button>
    </React.Fragment>
  )
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
