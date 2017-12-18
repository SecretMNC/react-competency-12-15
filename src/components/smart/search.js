import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../dumb/footer';
import { Link } from 'react-router-dom';


export default class Search extends Component {
    //COMP 36I CONSTRUCTOR
    constructor() {
        super()
        //COMP 36D SETTING STATE
        this.state = {
            list: [],
            searchTerm: '',
            location: 'Search'
        }

        this.updateSearchBar = this.updateSearchBar.bind(this);
        this.searchBios = this.searchBios.bind(this);
    }

    updateSearchBar(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    searchBios() {
        axios.get(`/api/get/bios/name/${this.state.searchTerm}`).then(res =>
            this.setState({
                list: res.data
            })
        )
    }

    //COMP 36F RENDER
    render() {
        //COMP 37D ARROW FUNCTION
        var bioList = this.state.list.map((item, index) => {
            let date = `${item.date_of_birth}`.substring(0, 10);
            return (
                <div key={index} className="bio_card">
                    <Link to={`/view/${item.id}`}>
                        <h3>{item.fullname}</h3>
                        <h4>{date}</h4>
                        <h5>{item.place_of_birth}</h5>
                        <h6>{item.how_tall}</h6>
                        <p>{item.body}</p>
                    </Link>
                </div>
            )
        })

        return (
            // COMP 36G JSX
            <div>
                <p>Search for a bio here.</p>
                {/* COMP 36H NESTED Component */}
                <p>(exact spelling, capitalization, and spaces matter)</p>
                <input className="inputs" placeholder="search by name: ex. Kevin Pett" onChange={this.updateSearchBar} />
                <button onClick={this.searchBios}>Search</button>
                {bioList}
                <Footer
                    // COMP 36C CALLING STATE
                    location={this.state.location} />
            </div>
        )
    }
}