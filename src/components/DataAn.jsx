import React from 'react';
import { useTable, useExpanded } from '@tanstack/react-table';

const DataAn = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useExpanded); // Use the useExpanded plugin hook

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          // Render the header rows
        ))}
      </thead>
<tbody {...getTableBodyProps()}>
  {rows.map((row, rowIndex) => {
    prepareRow(row);
    return (
      <React.Fragment key={rowIndex}>
        <tr {...row.getRowProps()}>
          {row.cells.map(cell => (
            // Render the main row cells
          ))}
        </tr>
        {row.isExpanded ? (
          <tr key={`${rowIndex}-nested`}>
            <td colSpan={columns.length}>
              {/* Render the nested table here */}
              <NestedTable />
            </td>
          </tr>
        ) : null}
      </React.Fragment>
    );
  })}
</tbody>
    </table>
  );
};

const NestedTable = () => {
  // Define the nested table structure here
  return (
    <div>
      {/* Render the nested table */}
    </div>
  );
};

export default DataAn;