import React from 'react';
import {Link} from 'react-router-dom';
import Background from '../background.png';
import SignUP from './signUP';
import Login from './logIN';
import Footer from './footer';
import Body from './content';

class Navbar extends React.Component {
    state = {
        status:false
    }

    render() {

        const loginHandler = () => {
            this.setState({
               status : !this.state.status
            });
            console.log(this.state);
        }

        return(
            <div >
               <div className="">
                    
                </div>
                <div className="">
                    <nav disabled={this.state.status} className="nav-wrapper " >
                            <div className="container ">
                                <Link to="/" className="brand-logo left" >Welcome to Edunomic</Link>
                                <ul className="right ">
                                    <li><Link to=""  type="button" className="btn-small" onClick={loginHandler} >Log in</Link></li>
                                    <li><Link to='./signUP' className="btn-small">Sign up</Link></li> 
                                </ul>
                            </div>
                    </nav>
                    <div disabled={!this.state.status} > <Login /> </div>
                    <img class='img' src={Background} alt="Logo" />
                    <div class="center-allign"> 
                        <h2>WHERE DO YOU WANT TO GO?</h2>
                        <p>Share your ultimate travel bucket list with us</p>
                    </div>
                </div>    
                <Body />
                <br></br>
                <Footer />
            </div>

        );
}
}

export default Navbar; 