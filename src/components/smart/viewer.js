import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBio } from '../../ducks/reducer';

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
        this.props.getBio(this.props.match.params.bioID)
        console.log(this.props)
    }

    render() {

        return (
            <div>
                <p>This is the viewer component.</p>
                <h3>{this.props.bioViewer.fullname}</h3>
                <h4>{this.props.bioViewer.date_of_birth}</h4>
                <h5>{this.props.bioViewer.place_of_birth}</h5>
                <h6>{this.props.bioViewer.how_tall}</h6>
                <p>{this.props.bioViewer.body}</p>

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state)
    return {
        bioViewer: state.bioViewer
    }
}

export default connect(mapStateToProps, { getBio })(Viewer)