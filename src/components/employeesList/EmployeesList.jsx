import EmployeesListItem from "../employeesListItem/EmployeesListItem";
import "./employeesList.scss";

const EmployeesList = ({ employeesData, onDelete, onToggleProp }) => {

    const employees = employeesData.map((employee) => {
        const { id, ...employeeData } = employee
        return (
            <EmployeesListItem
                key={id}
                {...employeeData}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(e.currentTarget.getAttribute("data-toggle"), id)} />
        );
    });

    return (
        <ul className="list list-group">
            {employees}
        </ul>
    )
};

export default EmployeesList;