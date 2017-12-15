import React, { Component } from 'react';
import Footer from '../dumb/footer';

export default class Builder extends Component {
    constructor(){
        super()
        
        this.state = {
            location: 'Builder'
        }
    }
    render() {
        return (
            <div>
                <p>This is the Builder Component. It can't do anything yet.</p>
                <Footer 
                location="Builder"/>
            </div>
        )
    }
}