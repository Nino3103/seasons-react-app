import React from 'react'
import ReactDOM from 'react-dom'



class App extends React.Component {

    // Not compulsory in React, comes from Javascript. 
    // to initialize State, ceremonials steps with constructor 
    constructor(props) {
        // super is compulsory, at the beginning
        super(props)

        this.state = {lat: null}

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setState !!!
                this.setState({ lat: position.coords.latitude })
            },
            err => console.log(err)
        )
    }

    // Compulsory in React
    render(){
    return <div> Latitude : {this.state.lat}</div> 
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))