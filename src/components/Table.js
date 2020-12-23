import React from 'react';
import '../App.css';
import TableRow from './TableRow';


function Table({data, clickText, clickFunction}) {

    let headers = Object.keys(data[0])

    return (
        <table>
            <thead>
                <tr>
                    { 
                        // create the column headers
                        headers.map(header => <th>{header}</th>)}

                    {   // don't create the column for the clickable button if the prop is existing 
                        (typeof clickText !== 'undefined' && typeof clickFunction !== 'undefined') ?
                        <th></th> : ""
                    }
                </tr>
            </thead>
            <tbody>
                {
                    // scroll through the entries
                    data.map(
                        (element, index) => (
                            <TableRow headers={headers} element={element} index={index} clickText={clickText} clickFunction={clickFunction}/>
                        )
                    )
                }
            </tbody>
        </table>
    );
}

export default Table;