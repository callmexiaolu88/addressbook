import React from "react"
import ReactDOM from "react-dom"

import AddAB from "./Components/AddAB"
import SearchAB from "./Components/SearchAB"

let people=[{firstname:"testFirstName", lastname:"testLastName", address:"testAddress"}];

class App extends React.Component{
    constructor(){
        super();
        this.state={
            people:people
        };
        this.addPerson=this.addPerson.bind(this);
    }

    addPerson(person){
        people.push(person);
        this.setState({
            people:people
        })
    }

    render(){
        return (
            <div>
                <AddAB addPerson={this.addPerson}/>
                <SearchAB people={this.state.people}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));