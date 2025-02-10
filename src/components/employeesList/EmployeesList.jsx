import EmployeesListItem from "../employeesListItem/EmployeesListItem";
import "./employeesList.scss";

const EmployeesList = () => {
    return (
        <ul className="list list-group">
            <EmployeesListItem />
            <EmployeesListItem />
            <EmployeesListItem />
        </ul>
    )
}

export default EmployeesList;