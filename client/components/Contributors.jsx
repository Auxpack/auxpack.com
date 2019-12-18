import React from 'react'


const Contributors = (props) => {
    return ( 
        <div id="authors">
            <div className="contributorPod">
                <h3>Nobuhide Ajito</h3>
                <img className="contributorImg" src='/Nobuhide.jpg' alt="Nobuhide Ajito picture"/>
                <div className="contributorLinks">
                    <a href="https://www.github.com/najito"><img className="github" src="/github.png"/></a>
                    <a href="https://www.linkedin.com/in/nobuhide-ajito/"><img className="linked" src="/linkedin.png" /></a>
                </div>
            </div>
            <div className="contributorPod">
                <h3>Stephanie Chiu</h3>
                <img className="contributorImg" src='/Stephanie.jpg' alt="Stephanie Chiu picture"/>
                <div className="contributorLinks">
                    <a href="https://github.com/stephkchiu"><img className="github" src="/github.png" /></a>
                    <a href="https://www.linkedin.com/in/stephanie-chiu-/"><img className="linked" src="/linkedin.png" /></a>
                </div>
            </div>
            <div className="contributorPod">
                <h3>Travis Clark</h3>
                <img className="contributorImg" src='/Travis.jpg' alt="Travis Clark Picture"/>
                <div className="contributorLinks">
                    <a href="https://github.com/tm-clark"><img className="github" src="/github.png" /></a>
                    <a href="https://www.linkedin.com/in/tm-clark/"><img className="linked" src="/linkedin.png" /></a>
                </div>
            </div>
            <div className="contributorPod">
                <h3>Connie Lai</h3>
                <img className="contributorImg" src='/Connie.jpg' alt="Connie Lai picture"/>
                <div className="contributorLinks">
                    <a href="https://github.com/connielion"><img className="github" src="/github.png" /></a>
                    <a href="https://www.linkedin.com/in/connie-lai-140266b7/"><img className="linked" src="/linkedin.png" /></a>
                </div> 
            </div>
        </div>
        
     );
}
 
export default Contributors;