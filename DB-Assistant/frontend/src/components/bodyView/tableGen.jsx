// TableGen.jsx
import React from 'react';
import "./tableGen.css"



const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);

};

const TableGen = ({ headers, rows }) => {
  return (
    <table className="table-cont">
      <thead className="tHead-cont">
        <tr className="heading-row">
          {headers.map((header, index) => (
            <th className='tHeading' key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className='tBody'>
        {rows.map((row, rowIndex) => (
          <tr className='tRow' key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td onClick={() => copyToClipboard(cell)} className='tData' key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableGen;

/*
* For this component to work the output from gpt response should be strictly in this format
{
  "table": {
    "headers": ["Name", "Age", "City"],
    "rows": [
     ["John", 25, "New York"],
     ["Alice", 30, "San Francisco"],
     ["Bob", 22, "Los Angeles"]
   ]
  }
}
*/