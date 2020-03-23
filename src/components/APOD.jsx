import React, { Component } from 'react';


class APOD extends Component {
    state = { 
        display: '',
        date: '',
        explanation: '',
        url: '',
        title: ''
       }
    
      API_KEY= '?api_key=c2dcsnMGhzrk7klXlBPx0frW6zgt3VhIauR00MBF';

     apodDisplay = ()=> {

        if (this.state.display === 'true') {
            return (
                <div>
                    <p className="description">{this.state.explanation}</p>
                </div>
            )
        }
          
    }
    
      astronomyPicOfDay =  ()=> {
          if (this.state.display === 'true'){
              this.setState({
                display: ''
              })
          } else {
            fetch('https://api.nasa.gov/planetary/apod?api_key=c2dcsnMGhzrk7klXlBPx0frW6zgt3VhIauR00MBF')
            .then(response => response.json())
            .then(data => {
              const { date, explanation, url, title } = data
              this.setState({
                display: 'true',
                date: date,
                explanation: explanation,
                url: url,
                title: title
              })
    
            } )
            this.apodDisplay()
          }
        
      }
 

    render() { 
        return (
            <React.Fragment>
               <button className="border-0" onClick= {()=> this.astronomyPicOfDay()}> Astronomy Pic Of The Day </button>
               <div>{this.apodDisplay()}</div>
            </React.Fragment>
          )
    }
}
 
export default APOD;