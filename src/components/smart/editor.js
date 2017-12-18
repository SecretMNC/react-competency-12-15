import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../dumb/footer';
import { connect } from 'react-redux';
import { getBio } from '../../ducks/reducer';
import { Link } from 'react-router-dom';


class Editor extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            name: '',
            birthday: '',
            birthplace: '',
            height: '',
            bio: '',
            location: 'Editor'
        }
        this.updateName = this.updateName.bind(this);
        this.updateBirthday = this.updateBirthday.bind(this);
        this.updateBirthPlace = this.updateBirthPlace.bind(this);
        this.updateHeight = this.updateHeight.bind(this);
        this.updateBio = this.updateBio.bind(this);
        this.submitForms = this.submitForms.bind(this);
        this.deleteBio = this.deleteBio.bind(this);
    }

    componentWillMount() {
        //COMP 42J MATCH TO PROPS
        this.props.getBio(this.props.match.params.bioID)
        //COMP 42K PROPERTIES OF MATCH
        console.log(this.props.match)
        console.log('setstate', this.props.bioViewer.fullname)
    }
    
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

    deleteBio() {
        //COMP 76D PARAMS
        axios.delete(`/api/bios/${this.props.match.params.bioID}`)
    }

    submitForms() {
        //COMP 44C AXIOS
        axios.put(`/api/bios/${this.props.bioViewer.fullname}`, {
            fullname: this.state.name,
            date_of_birth: this.state.birthday,
            place_of_birth: this.state.birthplace,
            how_tall: this.state.height,
            body: this.state.bio
            //COMP 44D PROMISES (.THEN)
        }).then(response => {
            if (response) {
                alert(`You have successfully submitted the updated bio, ${this.state.name}!`)
            }
        })
    }

    render() {
        let date = this.props.bioViewer.date_of_birth.substring(0, 10);
        return (
            <div className="inputs">
                <p>This is the editing component.</p>
                <p>{this.props.bioViewer.fullname}</p>
                <input placeholder={this.props.bioViewer.fullname} onChange={this.updateName}/>
                <input placeholder={date} onChange={this.updateBirthday} />
                <input placeholder={this.props.bioViewer.place_of_birth} onChange={this.updateBirthPlace} />
                <input placeholder={this.props.bioViewer.how_tall} onChange={this.updateHeight} />
                <textarea placeholder={this.props.bioViewer.body} cols="25" rows="25" onChange={this.updateBio}></textarea>

                <Link to='/search'>
                <button title='Submit' onClick={this.submitForms}>Submit</button> </Link>
                <Link to="/search"><button onClick={this.deleteBio}>Delete</button></Link>
            </div>
        )
    }
}

//COMP 43H mapStateToProps
function mapStateToProps(state) {
    console.log('state', state)
    return {
        bioViewer: state.bioViewer
    }
}

// COMP 43C CAN CONNECT
export default connect(mapStateToProps, { getBio })(Editor)