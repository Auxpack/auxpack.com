import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll'

const Features = (props) => {
    return ( 
        <section id='features'>
            <h2>Features</h2>
            <figure className="figure">
                <img className="featureImg" src='/overview-opt.gif' alt='gif of overview page'/>
            <ScrollAnimation animateIn='fadeInRight'>
            <figcaption><strong>Dashboard: </strong><br/>
                Know your entire bundle at a glance, get the details you need in the format you want. Elegant dashboard displays build information to make informed decisions about optimization.
            </figcaption>
            </ScrollAnimation>
            </figure>
            <figure className="figure">
            <ScrollAnimation animateIn='fadeInLeft'>
            <figcaption><strong>Build Data: </strong><br/>
                Text formatted build information with size and relation along with assets, errors and modules at a glance.
            </figcaption>
            </ScrollAnimation>
                <img className="featureImg" src='/builddata-opt.gif' alt='gif of build data page'/>
            </figure>
            <figure className="figure">
                <img className="featureImg" src='/treeshaking-opt.gif' alt='gif of treeshaking page'/>
                <ScrollAnimation animateIn='fadeInRight'>
            <figcaption><strong>Recommendations: </strong><br/>
                Utilize tree-shaking information at your fingertips to minimize your code to the most important parts.
            </figcaption>
            </ScrollAnimation>
            </figure>
            <figure className="figure">
            <ScrollAnimation animateIn='fadeInLeft'>
            <figcaption><strong>Bundle History: </strong><br/>
                Check your build history with comparative measurements of time and space through data-driven graphs
            </figcaption>
            </ScrollAnimation>
                <img className="featureImg" src='history.png' alt='picture of history data'/>
            </figure>
        </section>
     );
}
 
export default Features;