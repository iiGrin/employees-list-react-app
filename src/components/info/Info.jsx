import "./info.scss";

const Info = ({ totalCountOfEmployees, rise }) => {
    return (
        <div className="info">
            <h1>Employee accounting in X</h1>
            <h2>Total number of employees: {totalCountOfEmployees}</h2>
            <h2>Employees will receive the bonus: {rise}</h2>
        </div>
    )
};

export default Info;