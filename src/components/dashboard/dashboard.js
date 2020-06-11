import React from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends React.Component {
    render() {
        
        return(
            <div >
                <nav  className="nav-wrapper nav-dash" >
                    <div className="container text">
                        <Link to="/" className="brand-logo left" >Welcome to Edunomic</Link>
                        <ul className="right ">
                            <li><Link to="" className="account dropdown-button btn" data-activates='dropdown1' >Account</Link></li> 
                            
                        </ul>
                    </div>
                </nav>
                <div className="row side">
                    <div className="col s4 ">
                        <ul>
                            <li><Link to="./dashboard" className="sideslide" type="button">Home</Link></li>
                            <li><Link to="" className="sideslide" type="button">Sessions</Link></li>
                            <li><Link to="" className="sideslide" type="button">Downloads</Link></li>
                            <li><Link to="" className="sideslide" type="button">Settings</Link></li>
                            <li><Link to="" className="sideslide" type="button">About</Link></li>
                        </ul>
                    </div>
                    <div className="col s8  cards">
                        <div className="row">
                            <div className="col s2 offset-s2">
                                <div className="card11 card">All Interactive Sessions</div>
                                <div className="card11 card">Downloads</div>
                            </div>
                            <div className="col s2 offset-s2">
                                <div className="card11 card">Practice Questions</div>
                                <div className="card11 card">Ask Questions</div>
                            </div>
                        </div>
                        <div className="row sub">
                            <div className="row">
                                <div className="col s4 offset-s2 card card1 underline">Topic Coveres</div>
                                <div className="col s4 offset-s1 card  card1 underline">Recent Activity</div>
                            </div>
                            <div className="col s9 offset-s2 card card1 underline">Performance</div>
                        </div>
                        <div className="foot">
                            <div className="row ">
                                <p className="foot-content"> EDUNOMICS</p>
                                <p className="foot-content">contact@edunomics.in</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

