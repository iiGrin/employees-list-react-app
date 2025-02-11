import { Component } from "react";
import "./employeesListItem.scss";
class EmployeesListItem extends Component {
    constructor(props) {
        super();
        this.state = {
            increase: props.increase,
            bonus: props.bonus
        }
    }

    onIncrease = () => {
        this.setState((state) => ({
            increase: !state.increase
        }));
    }

    onBonus = () => {
        this.setState((state) => ({
            bonus: !state.bonus
        }));
    }

    render() {
        const { name, salary, onDelete } = this.props;
        const { increase, bonus } = this.state
        let defaultClasses = "list-group-item d-flex justify-content-between";

        if (increase) {
            defaultClasses += " increase";
        } else if (bonus) {
            defaultClasses += " like";
        }

        return (
            <li className={defaultClasses} >
                <span
                    className="list-group-item-label"
                    onClick={this.onBonus}>
                    {name}
                </span>
                <input
                    type="text"
                    className="list-group-item-input"
                    defaultValue={salary + "$"} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button"
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"
                        onClick={onDelete}></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
};

export default EmployeesListItem;