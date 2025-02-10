import "./filter.scss";

const Filter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                All employees
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                For promotion
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                By salary
            </button>
        </div>
    )
}

export default Filter;