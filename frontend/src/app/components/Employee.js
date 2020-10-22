import React, {Component} from 'react';


class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        }
    }

    componentDidMount() {

        let employee = this;

        employee.setState({
            employee: this.props.user
        });
    }

    render() {

        const imageStyle = {
            width: "100%",
            height: 200,
            "aria-label": "Placeholder: Image cap",
            focusable: false,
            role: "img",
            preserveAspectRatio: "xMidYMid slice",
            viewBox: "0 0 318 180",
            style: "font-size:1.125rem;text-anchor:middle"
          };

        var user = this.state.employee;

        return(
            <div>
                <h4>Employee Details</h4>
                
                <div className="row">
                    <div className="col-md-7">
                        <div className="form-group list-group-item list-group-item-action">
                            <label >Employee ID</label>
                            <input disabled type="text" className="form-control" id="userId" value={user.emp_id}/>
                        </div>

                        <div className="form-group list-group-item list-group-item-action">
                            <label >Employee Name</label>
                            <input disabled type="text" className="form-control" id="username" value={user.emp_name}/>
                        </div>

                        <div className="form-group list-group-item list-group-item-action">
                            <label >Email</label>
                            <input disabled type="text" className="form-control" id="email" value={user.emp_email}/>
                        </div>

                        <div className="form-group list-group-item list-group-item-action">
                            <label>Branch</label>
                            <input disabled type="text" className="form-control" id="branch" value={user.branch_name}/>
                        </div>

                        <div className="form-group list-group-item list-group-item-action">
                            <label >Bank</label>
                            <input disabled type="text" className="form-control" id="bank" value={user.bank_name}/>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <img src={user.emp_photo} alt="new" style={imageStyle}/>
                    </div>
                </div>
                

            </div>
        );
    }
}

export default Employee;