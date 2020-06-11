import React from 'react';
import {Link} from 'react-router-dom';


class Login extends React.Component {
    render() {
        return(
            <div className="LogIn">
                <form>
                    <fieldset className="field">  
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <Link to="./dashboard"><button className="btn" >Log In</button></Link>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Login;