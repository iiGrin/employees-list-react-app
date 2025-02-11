import EmployeesListItem from "../employeesListItem/EmployeesListItem";
import "./employeesList.scss";

const EmployeesList = ({ employeesData }) => {

    const employees = employeesData.map(employee => {
        const { id, ...employeeData } = employee
        return (
            <EmployeesListItem key={id} {...employeeData} />
        );
    });

    return (
        <ul className="list list-group">
            {employees}
        </ul>
    )
};

export default EmployeesList;