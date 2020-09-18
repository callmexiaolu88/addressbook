import React from "react"
import Person from "./Person"

class SearchAB extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: "",
        }
        this.valueChange = this.valueChange.bind(this);
    }

    valueChange(e) {
        e.preventDefault();
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        let filterpeople = this.props.people.filter(i => i.firstname.indexOf(this.state.filter) !== -1 || this.state.filter == "");
        let list = filterpeople.map((d,i) => <Person infor={d} key={i} />);
        return (
            <div>
                <label>filter people</label>
                <input value={this.state.filter} onChange={this.valueChange}></input>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default SearchAB