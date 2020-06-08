import React, { Component } from 'react';

class AthleteTable extends Component{
    render() {
        return (
            <div>
                <table className="Team-table">
                    <tr>
                        <th>Student Name</th>
                    </tr>
                    <tr>
                        <td>John Sutter</td>
                    </tr>
                    <tr>
                        <td>Romeo Bennett</td>
                    </tr>
                    <tr>
                        <td>Chad Johnson</td>
                    </tr>
                </table>
            </div> 
        );
    }
}

export default AthleteTable;