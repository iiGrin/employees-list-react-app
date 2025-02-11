import EmployeesListItem from "../employeesListItem/EmployeesListItem";
import "./employeesList.scss";

const EmployeesList = ({ employeesData, onDelete }) => {

    const employees = employeesData.map(employee => {
        const { id, ...employeeData } = employee
        return (
            <EmployeesListItem
                key={id}
                {...employeeData}
                onDelete={() => onDelete(id)} />
        );
    });

    return (
        <ul className="list list-group">
            {employees}
        </ul>
    )
};

export default EmployeesList;