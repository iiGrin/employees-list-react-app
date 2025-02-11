import EmployeesListItem from "../employeesListItem/EmployeesListItem";
import "./employeesList.scss";

const EmployeesList = ({ employeesData }) => {

    const employees = employeesData.map(employee => {
        return (
            <EmployeesListItem {...employee} />
        );
    });

    return (
        <ul className="list list-group">
            {employees}
        </ul>
    )
}

export default EmployeesList;