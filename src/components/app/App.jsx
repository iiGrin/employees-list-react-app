import Filter from '../filter/Filter';
import Info from '../info/Info';
import SearchPanel from '../searchPanel/SearchPanel';
import EmployeesList from '../employeesList/EmployeesList';
import EmployeesAddForm from '../employeesAddForm/EmployeesAddForm';
import './app.scss';

function App() {

    const data = [
        { name: "John Smit", salary: 1000, bonus: false, increase: false, id: 1 },
        { name: "Luisa Clark", salary: 1200, bonus: false, increase: true, id: 2 },
        { name: "Tony Stark", salary: 950, bonus: false, increase: false, id: 3 },
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
