import React, { useState } from 'react'
import Configuration from '../components/Configuration.jsx'
import Explanation from '../components/Explanation.jsx'

const ConfigurationContainer = (props) => {
    return ( 
        <div id="configPage">
            <Configuration />
            <Explanation />
        </div>
     );
}
 
export default ConfigurationContainer;