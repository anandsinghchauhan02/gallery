import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { useDispatch } from 'react-redux';
import * as Actions from '../../store/actions';
import { Container, Row, Col } from 'reactstrap';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const View = (props) => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(Actions.getGalleryData());
    }, [dispatch]);
    
    const {galleryData} = props
    let ViewData;
    if (galleryData.status === 200){
         ViewData = galleryData.data.offers.map((item) => {
            if (item.id === props.match.params.id) {
                return (
                    <Row className="p-2" key={item.id}>
                        <Col md={8}>
                            <div>
                                <ImageCarousel className="p-1" photodata={item.photos} />
                            </div>
                        </Col>
                        <Col md={4} className="p-3">
                            <div>
                                <p className="textSet"><span className="text-size">Name : </span>{item.details.name}</p>
                                <p className="textSet"><span className="text-size">Price : </span>{item.price.total}</p>
                                <p className="textSet"><span className="text-size">Location Name : </span>{item.location.name}</p>
                                <p className="textSet"><span className="text-size">Area : </span>value: {item.details.area.value}, unit: {item.details.area.unit}</p>
                                <div className="pt-3">
                                    <Link to="/">
                                        <button className="buttonSet">Back</button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                )
            }
        });
    } else{
        ViewData = <Loader/>
    }
    

    return(
        <Container className="mt-5">
            <div className="cardDesign">
                {ViewData}
            </div>
        </Container>
    )
}
const mapDispatchToProps = {
    getGalleryData: Actions.getGalleryData,
}

const mapStateToProps = (state) => ({
    galleryData: state.galleryReducer.galleryData
})

export default connect(mapStateToProps, mapDispatchToProps)(View);