import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import * as Actions from '../store/actions';
import { Container, Row, Col } from 'reactstrap';
import LeftPanel from '../leftPanel/LeftPanel';
import RightPanel from '../rightPanel/RightPanel';
import Loader from '../components/Loader/Loader';


const Gallery = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getGalleryData());
    }, [dispatch]);



    const { galleryData } = props;
    console.log('Gellery Data Find', galleryData)
    
    let rightData;
    if(galleryData.status === 200){
        rightData = galleryData.data.offers.map((item, index) => (
            <RightPanel item={item} key={index} />
        ))
    }else{
        rightData = <Loader/>
    } 

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4} sm={12} className="left-panel mb-2">
                    {(galleryData.status === 200) ? (<LeftPanel metaData={galleryData.data.metaData} />):(<Loader/>)}
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
    galleryData: state.galleryReducer.galleryData,
})


export default connect(mapStateToProps, mapDispatchToProps)(Gallery);