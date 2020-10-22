import React, {Component} from 'react';

import Header from '../components/Header';
import Employee from '../components/Employee';
import Breadcrumb from '../components/BreadCrumb';
import axios from 'axios';
import * as API from '../../Constants/APIs';
import '../../scss/Dashboard.css'

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            isClick: false 
        }

        this.getEmployee = this.getEmployee.bind(this);
    }

    getEmployee () {
        let user = this;

        let userId = document.getElementById('userId').value;

        let options = {
            headers: {
                'Authentication': 'bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }
        }

        axios.get(API.GET_EMPLOYEE + "/" + userId, options).then(function (response) {
            
            if(response.status === 200) {
                console.log(response);
                user.setState({
                    user: response.data,
                    isClick: !user.state.isClick                    
                })
                console.log(user.state);
            }
        }).catch( function (err) {
            console.log(err);
        });
    }

    render() {
        return(
            <div className='ds-container'>

                <Header/>
                <Breadcrumb path={'Home'}/>

                <div className="ds-dash-selection">
                    <h3>Employees</h3>

                    <div className="row">

                        <div className="col-md-5">
                            <div className="form-group list-group-item list-group-item-action">
                                <label >User Id</label>
                                <input type="text" className="form-control" id="userId" aria-describedby="emailHelp"/>
                            </div>

                            <div className="list-group-item list-group-item-action">
                                <button type="button" className="btn btn-primary btn-lg" onClick={this.getEmployee}>Enter</button>
                            </div>
                        </div>
                    </div>
                </div>

                { this.state.isClick &&
                    <Employee user={this.state.user}/>        
                }
            </div>
        );
    }
}

export default Dashboard;