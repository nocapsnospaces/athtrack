import React, { Component } from 'react';

class SurveyTable extends Component{
    render() {
        return (
            <div>
                <table className="Survey-table">
                    <tr>
                        <th>Survey Name</th>
                    </tr>
                    <tr>
                        <td>Survey 1</td>
                    </tr>
                    <tr>
                        <td>Survey 2</td>
                    </tr>
                    <tr>
                        <td>Survey 3</td>
                    </tr>
                </table>
            </div> 
        );
    }
}

export default SurveyTable;