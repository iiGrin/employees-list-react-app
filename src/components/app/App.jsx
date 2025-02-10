import Filter from '../filter/Filter';
import Info from '../info/Info';
import SearchPanel from '../searchPanel/SearchPanel';
import EmployeesList from '../employeesList/EmployeesList';
import EmployeesAddForm from '../employeesAddForm/EmployeesAddForm';
import './app.scss';

function App() {
    return (
        <div className="app">
            <Info />
            <div className="search-panel">
                <SearchPanel />
                <Filter />
            </div>
            <EmployeesList />
            <EmployeesAddForm />
        </div>
    );
}

export default App;
