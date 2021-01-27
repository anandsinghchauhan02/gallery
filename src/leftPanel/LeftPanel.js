import React from 'react';
import MetaData from '../components/MetaData/MetaData';

const LeftPanel = (props) => {
    return (
        <div className="cardDesign">
         <MetaData metaData={props.metaData}/>
      </div>
    )
}

export default LeftPanel;