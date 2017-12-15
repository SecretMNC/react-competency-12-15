import React, { Component } from 'react';
import Footer from '../dumb/footer';
import Viewer from './viewer';

export default class Search extends Component {
    //COMP 36I CONSTRUCTOR
    constructor(){
        super()
        //COMP 36D SETTING STATE
        this.state = {
            location: 'Search'
        }
    }
    //COMP 36F RENDER
    render() {
        return (
            // COMP 36G JSX
            <div>
                <p>This is the Search Component. The only thing it can do is show the child viewer component and pass props to it!</p>
                {/* COMP 36H NESTED Component */}
                <Viewer
                someProps="I am a prop that is being passed!"/>
                <Footer 
                // COMP 36C CALLING STATE
                location={this.state.location}/>
            </div>
        )
    }
}