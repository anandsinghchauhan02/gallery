import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ImageCarousel from '../ImageCarousel/ImageCarousel';
import { Link } from 'react-router-dom';

const CardDetail = (props) => {
    const cardData = props.data
    return(
        <Container className="shadow-sm p-2">
          <Row>
              <Col md={6}>
                    <div>
                        <ImageCarousel className="p-1" photodata={cardData.photos}/>
                    </div>
              </Col>
                <Col md={6} className="p-3">
                    <div>
                        <p className="textSet"><span className="text-size">Name : </span>{cardData.details.name}</p>
                        <p className="textSet"><span className="text-size">Price : </span>{cardData.price.total}</p>
                        <p className="textSet"><span className="text-size">Location Name : </span>{cardData.location.name}</p>
                        <p className="textSet"><span className="text-size">Area : </span>value: {cardData.details.area.value}, unit: {cardData.details.area.unit}</p>
                        <div className="pt-3">
                            <Link to={`/${cardData.id}`}>
                                <button className="buttonSet">View More</button>
                            </Link>
                        </div>
                    </div>
              </Col>
          </Row>
      </Container>
    )
}


export default CardDetail;