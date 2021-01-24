import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import * as Actions from '../store/actions';



const Gallery = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(Actions.getGalleryData());
    }, [dispatch]);
    
    
    const {galleryData} = props;
    console.log('%c galleryData find', 'color: #03a9f4',galleryData);
    return(
        <h3>My Gallery</h3>
    )
}

const mapDispatchToProps = {
    getGalleryData:Actions.getGalleryData,
}

const mapStateToProps = (state) => ({
    galleryData: state.galleryReducer.galleryData
})


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);