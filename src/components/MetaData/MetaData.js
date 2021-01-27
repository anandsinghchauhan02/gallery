import { Container, Row, Col } from 'reactstrap';


const MetaData = (props) => {
    

    return (
       <Container>
           <Row>
               <Col>
                    <div className="py-2">
                        <p className="textSet"><span className="text-size">Name : </span>{props.metaData.listTitle}</p>
                        <p className="textSet"><span className="text-size">Region : </span>{props.metaData.searchRegion.name}</p>
                    </div>
               </Col>
           </Row>
       </Container>
    )
}

export default MetaData;

