import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'



class App extends React.Component {

    state = { lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({errorMessage: err.message})
        )
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error : {this.state.errorMessage} </div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
            // return <div> Latitude : {this.state.lat} </div>
        }

        return <Spinner message="Please accept location request" />
    }
    // Compulsory in React
    render(){
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))















// class App extends React.Component {

//     // Not compulsory in React, comes from Javascript. 
//     // to initialize State, ceremonials steps with constructor 
//     constructor(props) {
//         // super is compulsory, at the beginning
//         super(props)

//         this.state = {lat: null, errorMessage: ''}
//     }

//     componentDidMount() {
//         window.navigator.geolocation.getCurrentPosition(
//             position => this.setState({ lat: position.coords.latitude }),
//             err => this.setState({errorMessage: err.message})
//         )
//     }
//     // Compulsory in React
//     render(){
//         if (this.state.errorMessage && !this.state.lat) {
//             return <div> Error : {this.state.errorMessage} </div>
//         }

//         if (!this.state.errorMessage && this.state.lat) {
//             return <div> Latitude : {this.state.lat} </div>
//         }

//         return <div> Loading !</div>
//     }
// }