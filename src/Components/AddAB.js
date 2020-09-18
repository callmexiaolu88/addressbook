import React from "react"

class AddAB extends React.Component {
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: "",
            address: ""
        },
        this.submit=this.submit.bind(this);
        this.valueChange=this.valueChange.bind(this);
    }

    submit(e){
        e.preventDefault();
        this.props.addPerson(this.state);
    }

    valueChange(e){
        e.preventDefault();
        this.state[e.target.name]=e.target.value;
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <h1>Add new person</h1>
                    <label>first name</label>
                    <input value={this.state.firstname} type="text" name="firstname" onChange={this.valueChange}/>
                    <label>last name</label>
                    <input value={this.state.lastname} type="text" name="lastname" onChange={this.valueChange}/>
                    <label>address</label>
                    <input value={this.state.address} type="text" name="address" onChange={this.valueChange}/>
                    <button type="submit">提交</button>
                </form>
            </div>
        );
    }
}

export default AddAB