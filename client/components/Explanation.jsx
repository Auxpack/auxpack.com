import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
}))(Tooltip);


const Userinput = (props) => {
 

    return ( 
        <div id="explanation">
            <h2>Explanation: </h2>
            <LightTooltip title="entry is used to describe where to begin bundling from">
                <Button>entry</Button>
            </LightTooltip>
            <LightTooltip title="output is used to target a path and filename to produce a bundle. it can also use a publicPath to set public assets relative from your index.html file">
                <Button>output</Button>
            </LightTooltip>
            <LightTooltip title="mode is used to describe what mode you are running your project in (testing, development, production)">
                <Button>mode</Button>
            </LightTooltip>
            <LightTooltip title="plugins are used to modify/configure Webpack's process">
                <Button>plugin</Button>
            </LightTooltip>
            <LightTooltip title="modules are configurations for your modules with a certain set of rules">
                <Button>module</Button>
            </LightTooltip>
            <LightTooltip title="includes test, include, exclude, use and many other advanced configurations per module">
                <Button>rules</Button>
            </LightTooltip>
            <LightTooltip title="uses regular expressions to find file extension names to perform certain actions">
                <Button>test</Button>
            </LightTooltip>
            <LightTooltip title="when utilizing multiple loaders or presets">
                <Button>use</Button>
            </LightTooltip>
            <LightTooltip title="loaders used to process information(requires npm install or yarn add of these packages)">
                <Button>loader</Button>
            </LightTooltip>
            <LightTooltip title="within loaders, there are options to use things like presets (required by babel to parse through React) that also are installed separately">
                <Button>options</Button>
            </LightTooltip>
            <br/>
            <span id="jumper">Click to jump</span>
            <LightTooltip title="devServer allows to create a publicPath that defines where the bundle is served, proxy that connects running a backend to receive requests, compress that enables gzip compresson, historyApiFallback that reguides user through different paths">
                <Button href="#devServer">devServer</Button>
            </LightTooltip>
            <LightTooltip title="resolve makes sure to include js and react files">
                <Button href="#devServer">resolve</Button>
            </LightTooltip>
        </div>
     );
}
 
export default Userinput;