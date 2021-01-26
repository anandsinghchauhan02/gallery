import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import * as Actions from '../store/actions';
import {Container, Row, Col} from 'reactstrap';
import LeftPanel from '../leftPanel/LeftPanel';
import RightPanel from '../rightPanel/RightPanel';



const Gallery = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(Actions.getGalleryData());
    }, [dispatch]);
    
    
    const {galleryData} = props;
    
    const rightData = galleryData.offers.map((item, index) => (
        <RightPanel item={item} key={index}/>
    ))

    return(
        <Container className="mt-3">
            <Row>
                <Col md={4} sm={12} className="left-panel mb-2">
                    <LeftPanel/>
                </Col>
                <Col md={8} sm={12} className="right-panel">
                    {rightData}
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = {
    getGalleryData:Actions.getGalleryData,
}

const mapStateToProps = (state) => ({
    galleryData: state.galleryReducer.galleryData
})


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);