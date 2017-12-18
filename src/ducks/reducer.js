import axios from 'axios';

const initialState = {
    bioViewer: {
        fullname: '',
        date_of_birth: '',
        place_of_birth: '',
        how_tall: '',
        body: ''
    }
}

const GET_SELECTED_BIO = 'GET_SELECTED_BIO';

//COMP 43E ACTIONS
export function getBio(bioID) {
    return {
        type: GET_SELECTED_BIO,
        payload: axios.get(`/api/get/bios/${bioID}`).then(res => res)
    }
}

//COMP 43D REDUCER
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_SELECTED_BIO_FULLFILLED':
            return Object.assign({}, state, {
                bioViewer: action.payload.data
            })

        default: return state;
    }
}