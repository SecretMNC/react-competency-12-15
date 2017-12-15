import React, { Component } from 'react';
import Footer from '../dumb/footer';

export default class Viewer extends Component {
    //COMP 36E PROPS BEING PASSED INTO SMART COMPONENT
    constructor(props){
        super(props)
        //COMP 36D SETTING STATE
        this.state = {
            location: 'Viewer'
        }
    }
    render() {
        return (
            <div>
                <p>This is the Viewer Component. The only thing it can do is receive props!</p>
            
                <h6>This is the props that was sent: {this.props.someProps}</h6>
                <Footer 
                // COMP 36C CALLING STATE
                location={this.state.location}/>
            </div>
        )
    }
}