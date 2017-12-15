import React, { Component } from 'react';
import Footer from '../dumb/footer';

export default class Editor extends Component {
    constructor(){
        super()
        
        this.state = {
            location: 'Editor'
        }
    }
    render() {
        return (
            <div>
                <p>This is the Editor Component. It can't do anything yet.</p>
                <Footer 
                location={this.state.location}/>
            </div>
        )
    }
}