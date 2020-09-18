import React from "react"

class Person extends React.Component {
    render() {
        return (
            <li>
                <p>
                    first name: {this.props.infor.firstname} <br />
                    last name: {this.props.infor.lastname} <br />
                    address: {this.props.infor.address}
                </p>
            </li>
        );
    }
}

export default Person