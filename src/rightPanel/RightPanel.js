import React from 'react';
import CardDetail from '../components/CardDetail/CardDetail';

const RightPanel = (props) => {
    return(
        <div className="cardDesign mb-2">
            <CardDetail data={props.item}/>
        </div>
    )
}

export default RightPanel;