import * as actionTypes from './actionTypes';
import axios from "axios";

export const getGalleryData = (params) => {
    const request = axios.get('https://api.holidu.com/rest/v6/search/offers?searchTerm=Mallorca,%20Spanien', { params });
    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type: actionTypes.GET_GALLERY_DATA,
                payload: response.data
            })
        )
}