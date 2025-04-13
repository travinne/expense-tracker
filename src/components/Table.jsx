import React from "react"

const Table = ({headers,data}) => {
  return(
    <table className="table">
      <thead>
        <tr>
          {headers.map((header,headIndex) =>
           (<th key={headIndex}>{header}
           </th>)
        )
        }
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) =>(
          <tr key={index}>
            {headers.map((header, dataIndex) => (
            <td key={dataIndex}>
              {row[header]}
            </td>))
          }
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table