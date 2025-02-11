import Filter from '../filter/Filter';
import Info from '../info/Info';
import SearchPanel from '../searchPanel/SearchPanel';
import EmployeesList from '../employeesList/EmployeesList';
import EmployeesAddForm from '../employeesAddForm/EmployeesAddForm';
import './app.scss';

function App() {

    const data = [
        { name: "John Smit", salary: 1000, increase: false },
        { name: "Luisa Clark", salary: 1200, increase: true },
        { name: "Tony Stark", salary: 950, increase: false },
    ];

    return (
        <div className="app">
            <Info />
            <div className="search-panel">
                <SearchPanel />
                <Filter />
            </div>
            <EmployeesList employeesData={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;
