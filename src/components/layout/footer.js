import React from 'react';

class Footer extends React.Component{
    render() {
        return(
            <footer className="page-footer footer">
                <div className="container center">
                    <div className="row">
                        <h5> EDUNOMICS</h5>
                        <p>contact@edunomics.in</p>
                    </div>
                    <div></div>
                    <div>
                        <div className='row'>
                            <div className="col s2 offset-s1">JOIN US</div>
                            <div className="col s2">COOKIE POLICY</div>
                            <div className="col s2">TERMS OF USE</div>
                            <div className="col s2">TECH</div>
                            <div className="col s3">PRIVACY POLICY</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;