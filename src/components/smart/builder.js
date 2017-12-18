import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../dumb/footer';
import { Link } from 'react-router-dom';


export default class Builder extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            birthday: '',
            birthplace: '',
            height: '',
            bio: '',
            location: 'Builder'
        }

        this.updateName = this.updateName.bind(this);
        this.updateBirthday = this.updateBirthday.bind(this);
        this.updateBirthPlace = this.updateBirthPlace.bind(this);
        this.updateHeight = this.updateHeight.bind(this);
        this.updateBio = this.updateBio.bind(this);
        this.submitForms = this.submitForms.bind(this);
    }


    //COMP 36J EVENT HANDELING
    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    updateBirthday(e) {
        this.setState({
            birthday: e.target.value
        })
    }

    updateBirthPlace(e) {
        this.setState({
            birthplace: e.target.value
        })
    }

    updateHeight(e) {
        this.setState({
            height: e.target.value
        })
    }

    updateBio(e) {
        this.setState({
            bio: e.target.value
        })
    }

    submitForms() {
        //COMP 44C AXIOS
        axios.post('/api/bios', {
            fullname: this.state.name,
            date_of_birth: this.state.birthday,
            place_of_birth: this.state.birthplace,
            how_tall: this.state.height,
            body: this.state.bio
            //COMP 44D PROMISES (.THEN)
        }).then(response => {
            if (response) {
                alert(`You have successfully submitted the bio, ${this.state.name}! Go to the search page to find your newly created Bio.`)
            }
        })
    }

    render() {
        return (
            <div>
                <h3>Fill out all the forms below.</h3>
                <p>* = required </p>

                <div className="inputs">
                    <input placeholder="First and last name*" onChange={this.updateName} />

                    <input placeholder="Birth date? ex 1999-12-31 : YYYY-DD-MM" onChange={this.updateBirthday} />

                    <input placeholder="Birth place? ex Provo, UT" onChange={this.updateBirthPlace} />

                    <input placeholder="Height? ex 5 feet 10 inches" onChange={this.updateHeight} />

                </div>
                <textarea cols="100" rows="25" placeholder="Type your biography here*" onChange={this.updateBio}></textarea>

                <Link to='/search'>
                <button title='Submit' onClick={this.submitForms}>Submit</button>
                </Link>
                <Footer
                    location="Builder" />
            </div>
        )
    }
}