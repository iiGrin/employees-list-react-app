import { Component } from "react";
import "./searchPanel.scss";

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ""
        }
    }

    onUpdateSearch = (e) => { // local function 
        const term = e.target.value; // local term
        this.setState({ term });
        this.props.onUpdateSearch(term); // lifting term to global state (App.jsx)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Find an employee"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
        )
    }
}

export default SearchPanel;