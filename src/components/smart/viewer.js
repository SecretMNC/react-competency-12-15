import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBio } from '../../ducks/reducer';
import { Link } from 'react-router-dom';


class Viewer extends Component {
    //COMP 36E PROPS BEING PASSED INTO SMART COMPONENT
    constructor() {
        super()
        //COMP 36D SETTING STATE
        this.state = {
            location: 'Viewer'
        }
    }

    //COMP 44E componentDidMount
    componentDidMount() {
        //COMP 43J mapDispatchToProps
        this.props.getBio(this.props.match.params.bioID)
        console.log(this.props.match.params.bioID)
    }

    render() {
        let date = this.props.bioViewer.date_of_birth.substring(0, 10);
        return (
            <div className="bio_viewing">
                <p>This is the viewer component.</p>
                <h3>{this.props.bioViewer.fullname}</h3>
                <h4>{date}</h4>
                <h5>{this.props.bioViewer.place_of_birth}</h5>
                <h6>{this.props.bioViewer.how_tall}</h6>
                <p>{this.props.bioViewer.body}</p>

                <Link to={`/bio-editor/${this.props.match.params.bioID}`}><button>Edit</button></Link>
            </div>
        )
    }
}

//COMP 43H mapStateToProps
function mapStateToProps(state) {
    console.log('state', state)
    return {
        //COMP 43G SHARING STATE
        bioViewer: state.bioViewer
    }
}

// COMP 43C CAN CONNECT
export default connect(mapStateToProps, { getBio })(Viewer)