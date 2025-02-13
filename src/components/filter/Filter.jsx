import "./filter.scss";

const Filter = (props) => {
    const buttonsData = [
        {name: "all", label: "All employees"}, 
        {name: "promotion", label: "For promotion"}, 
        {name: "bySalary", label: "More than 1000$"}
    ];

    const buttons = buttonsData.map((btn) => {
        const active = props.filter === btn.name;
        const clazz = active ? "btn-light" : "btn-outline-light";
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={btn.name}
                onClick={() => props.onFilterSelect(btn.name)}>
                {btn.label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    )

}

export default Filter;