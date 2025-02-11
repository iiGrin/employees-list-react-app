import { Component } from 'react';
import Info from '../info/Info';
import SearchPanel from '../searchPanel/SearchPanel';
import Filter from '../filter/Filter';
import EmployeesList from '../employeesList/EmployeesList';
import EmployeesAddForm from '../employeesAddForm/EmployeesAddForm';
import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeesData: [ // immutable state
                { name: "John Smit", salary: 1000, bonus: false, increase: false, id: 1 },
                { name: "Luisa Clark", salary: 1200, bonus: false, increase: true, id: 2 },
                { name: "Tony Stark", salary: 950, bonus: false, increase: false, id: 3 },
            ]
        };
        this.maxId = 4;
    }

    deleteEmployee = (id) => {
        this.setState(({ employeesData }) => {
            return {
                employeesData: employeesData.filter((employee) => employee.id !== id)
            };
        });
    } 

    addEmployee = (name, salary) => {
        const newEmployee = { // new employee
            name,
            salary,
            bonus: false,
            increase: false,
            id: this.maxId++ // update last id(index)
        }
        this.setState(({ employeesData }) => {
            return {
                employeesData: [...employeesData, newEmployee] // immutable principle
            }
        })
    }

    render() {
        const { employeesData } = this.state;
        return (
            <div className="app">
                <Info />
                <div className="search-panel">
                    <SearchPanel />
                    <Filter />
                </div>
                <EmployeesList
                    employeesData={employeesData}
                    onDelete={this.deleteEmployee} />
                <EmployeesAddForm onAdd={this.addEmployee}/> {/* pass function to addForm */}
            </div>
        );
    }
}

export default App;
