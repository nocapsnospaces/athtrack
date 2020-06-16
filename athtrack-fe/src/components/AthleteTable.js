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
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
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