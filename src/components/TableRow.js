import React from 'react';

function TableRow({headers, element, index, clickText, clickFunction}) {
    return (
        <tr className = {
            // set on every 2nd row the property odd
            (index & 1) ? "odd" : ""
        }>{
            // create a cell for every property of the underlying object
            headers.map(header => <td> {element[header]} </td>)
            }
            
            { 
            // create the buttons only if the props clickText and clickFuntion is defined
            (typeof clickText !== 'undefined' && typeof clickFunction !== 'undefined') ? 
            <td onClick={() => clickFunction(index)} className="button">{clickText}</td> : ""
            }
        </tr>      
    );
}

export default TableRow;