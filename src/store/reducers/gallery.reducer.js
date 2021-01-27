import * as actionTypes from '../actions/actionTypes';

const initialState = {
    galleryData: {}
};


const galleryReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case actionTypes.GET_GALLERY_DATA:
        {
            return{
                ...state,
                galleryData:action.payload
            }
        }
        default:
            {
                return state;
            }
    }
}


export default galleryReducer;