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
                { name: "John Smit", salary: 1000, rise: false, increase: false, id: 1 },
                { name: "Luisa Clark", salary: 1200, rise: false, increase: true, id: 2 },
                { name: "Tony Stark", salary: 950, rise: false, increase: false, id: 3 },
            ],
            term: "", 
            filter: "all"
        };
        this.maxId = 4;
    }

    addEmployee = (name, salary) => {
        const newEmployee = { // new employee
            name,
            salary,
            rise: false,
            increase: false,
            id: this.maxId++ // update last id(index)
        }
        this.setState(({ employeesData }) => {
            return {
                employeesData: [...employeesData, newEmployee] // immutable principle
            }
        })
    }

    deleteEmployee = (id) => {
        this.setState(({ employeesData }) => {
            return {
                employeesData: employeesData.filter((employee) => employee.id !== id)
            }
        })
    }

    onToggleProp = (prop, id) => { // func for toggle increase and rise state
        this.setState(({ employeesData }) => ({
            employeesData: employeesData.map((employee) => {
                if (employee.id === id) {
                    return { ...employee, [prop]: !employee[prop] };
                }
                return employee;
            })
        }))
    }

    onUpdateSearch = (term) => { // update term state from SearchPanel.jsx state
        this.setState({ term });
    }

    searchEmployee = (employees, term) => {
        if (!term.length) { // all employees
            return employees
        }

        return employees.filter(employee => {
            return employee.name.indexOf(term) > -1;
        })
    }

    filterPost = (employees, filter) => {
        switch(filter) {
            case "promotion": 
                return employees.filter(employee => employee.rise);
            case "bySalary":
                return employees.filter(employee => employee.salary > 1000);
            default: 
                return employees;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const { employeesData, term, filter } = this.state;
        const {
            addEmployee,
            deleteEmployee,
            onToggleProp,
            searchEmployee,
            onUpdateSearch,
            filterPost,
            onFilterSelect
        } = this;
        const totalCountOfEmployees = employeesData.length;
        const rise = employeesData.filter(employee => employee.rise).length;
        const visibleEmployees = filterPost(searchEmployee(employeesData, term), filter)

        return (
            <div className="app">
                <Info
                    totalCountOfEmployees={totalCountOfEmployees}
                    rise={rise} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={onUpdateSearch} />
                    <Filter 
                    filter={filter}
                    onFilterSelect={onFilterSelect} />
                </div>
                <EmployeesList
                    employeesData={visibleEmployees}
                    onDelete={deleteEmployee}
                    onToggleProp={onToggleProp} />
                <EmployeesAddForm onAdd={addEmployee} /> {/* pass function to addForm */}
            </div>
        );
    }
}

export default App;
