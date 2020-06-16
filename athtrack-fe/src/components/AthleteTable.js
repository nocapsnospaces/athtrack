import React, { Component } from 'react';

class AthleteTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            athletes: [],
            students: this.props.data

        };
    }

    render() {
        const students = this.state.students;
        if (students) {
            return (
                <table
                    style={{
                        width: "300px",
                        backgroundColor: "white",
                        borderRadius: "20px",
                        fontSize: "13px",
                        margin: "10px auto",
                        verticalAlign: "bottom",
                        marginTop: "40px",
                        textAlign: "center"
                    }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody style={{ textAlign: "center" }}>
                        {this.state.students.map((data, key) => {
                            return (
                                <tr key={key}>
                                    <td>{data.name}</td>
                                    <td>{data.id}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            );
        }
        else {
            return (
                <table>
                    <thead>

                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> " dfd"</td>
                            <td> " dfdg" </td>
                        </tr>
                    </tbody>
                </table>

            )
        }
    }
}

export default AthleteTable;