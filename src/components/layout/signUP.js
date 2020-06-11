import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

class SignUP extends React.Component {
    render() {
        return(
            <div className="container ">
                <div className="col signup1  ">
                    <h4 className="heading">SIGN UP</h4>
                    <div>
                        <fieldset className="field">  
                            <input type="text" placeholder="Name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="password" placeholder="Password"/>
                            <input type="tel" placeholder="Contact" />
                        </fieldset>

                        <Link to="/"><button className="btn" >Sign Up</button></Link>
                    </div>
                </div>
            </div>
        );
    }
} 

export default SignUP;