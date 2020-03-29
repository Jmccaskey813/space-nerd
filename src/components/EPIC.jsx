import React, { Component } from 'react';

class EPIC extends Component {
    state = { 
        images: '',
        display: ''
     }

     photoCarousel = () => {  
        if (this.state.display === 'true'){
            return (
                <span>These images were taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft</span>
                
            )
        }
        
     }

     componentDidUpdate() {
         console.log(this.state);

     }

    retrieveData = () => {
        this.state.display === 'true'
            ? this.setState({
                images: '',
                display: ''
                
            })
        : fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=k7K0elE3DhKJVsp6MIbDrqD0U7sS5qIEdFeeWDoE')
            .then(response => response.json())
            .then(data => (
                this.setState({
                    images: data,
                    display: 'true'
                }))
        )
      console.log(this.state)  
    };
    render() { 
        
        return ( 
            <React.Fragment>
                <button  onClick={()=> this.retrieveData()}className="border-0">EPIC</button>
                <div>{this.photoCarousel()}</div>
            </React.Fragment>
         );
    }
}
 
export default EPIC;