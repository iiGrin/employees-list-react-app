import { Component } from "react";
import "./employeesAddForm.scss";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            salary: "",
        }
    }

    onValueChange = (e) => { // function to change state value
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.name, this.state.salary); // set current input value to addEmployee function 
        this.setState({ // clear inputs 
            name: "",
            salary: "",
        });
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}> {/* add event listener */}
                    <input
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Name of employee"
                        name="name"
                        value={name}
                        onChange={this.onValueChange} /> {/* controlled element */}
                    <input
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?"
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange} />
                    <button
                        type="submit"
                        className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;