import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import * as Actions from '../../store/actions';
import { Container, Row, Col } from 'reactstrap';

const MetaData = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getGalleryData());
    }, [dispatch]);


    const { galleryData } = props;
    // console.log('%c galleryData find in meta data', 'color: #03a9f4', galleryData);

    return (
       <Container>
           <Row>
               <Col>
                    <div className="py-2">
                        <p className="textSet"><span className="text-size">Name : </span>{galleryData.metaData.listTitle}</p>
                        <p className="textSet"><span className="text-size">Region : </span>{galleryData.metaData.searchRegion.name}</p>
                    </div>
               </Col>
           </Row>
       </Container>
    )
}

const mapDispatchToProps = {
    getGalleryData: Actions.getGalleryData,
}

const mapStateToProps = (state) => ({
    galleryData: state.galleryReducer.galleryData
})

export default connect(mapStateToProps, mapDispatchToProps)(MetaData);

