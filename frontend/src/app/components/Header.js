import React, {Component} from 'react';

import logo from '../../images/kong.png'

import '../../scss/Header.css';

class Header extends Component {

    signOut = () => {
        window.localStorage.clear();
        window.location.href = '/login';
    }

    render() {
        return(
            <div>
                <span><img src={logo} style={{width: "5%"}}/></span>
                <span>Kong Assignement</span>

                <span className='ds-logout'>
                    <span>{localStorage.getItem('user')}</span>
                    <button type="button" class="btn btn-primary" onClick={this.signOut}>logout</button>
                </span>

                <span className="navbar navbar-expand-lg navbar-dark bg-primary" />
            </div>
    );
    }
}

export default Header;