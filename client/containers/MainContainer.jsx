import React from 'react'
import { Switch, Route } from 'react-router'
import LandingContainer from './LandingContainer.jsx'
import ConfigurationContainer from './ConfigurationContainer.jsx'
import NavMenu from '../components/NavMenu.jsx'

const MainContainer = (props) => {
    return ( 
        <React.Fragment>
            <NavMenu/>
            <Switch>
                <Route exact path="/" render={()=>(
                    <LandingContainer/>
                )}/>
                <Route exact path="/configuration" render={()=>(
                    <ConfigurationContainer/>
                )}/>
            </Switch>
        </React.Fragment>
     );
}
 
export default MainContainer;