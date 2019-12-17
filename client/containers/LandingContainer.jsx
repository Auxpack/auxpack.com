import React from 'react';
import Particles from 'react-particles-js';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Features from '../components/Features.jsx'
import Contributors from '../components/Contributors.jsx'

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const LandingContainer = (props) => {
    const classes = useStyles();
    return ( 
        <React.Fragment>
            <div id="summary">
                <div id="particles">
                    <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 90,
                            "density": {
                                "enable": true,
                                "value_area": 1500
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.02
                        },
                        "move": {
                            "direction": "right",
                            "speed": 0.05
                        },
                        "size": {
                            "value": 2
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 2,
                                "opacity_min": 0.05
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    "retina_detect": true
                }} />
                </div>
                <div id="explanation-word">
                    <h2>auxpack</h2>
                    <h3>The Ultimate Optimization Tool for Modern Web Development</h3>
                    <p>Your application needs to be fast and efficient in orer for the optimal user experience. By monitoring your bundle size through the devlopment cycle, changes in your app that affect your application negatively can be identified before deployment. With our application, you can view the optimizations available for you to take action.</p>
                    <div id="buttons">
                        <Button variant="contained" color="primary" href="https://github.com/Auxpack/Auxpack">
                            GitHub
                        </Button>
                        <Button variant="contained" color="primary" href="https://www.npmjs.com/package/auxpack">
                            NPM
                        </Button>
                    </div>
                </div>
            </div>
            <Features />
            <div id="contribute">
                <div id="particles2">
                    <Particles
                        params={{
                    "particles": {
                        "number": {
                            "value": 90,
                            "density": {
                                "enable": true,
                                "value_area": 1500
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.02
                        },
                        "move": {
                            "direction": "right",
                            "speed": 0.05
                        },
                        "size": {
                            "value": 2
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 2,
                                "opacity_min": 0.05
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    "retina_detect": true
                }} />
                </div>
                <div id="contributors">
                    <Contributors/>
                </div>
            </div>
    </React.Fragment>
     );
}
 
export default LandingContainer;