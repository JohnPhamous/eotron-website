import React from "react"
import styled from "styled-components"

const Table = ({ children }) => {
  return (
    <>
      <TableContainer>{children}</TableContainer>
    </>
  )
}

export default Table

const TableContainer = styled.table`
  width: 100%;
  border-color: grey;
  border-spacing: 2px;
  display: table;
  padding: 0;
  margin: 12px 0;
  border-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 3px 8px 0px;
  color: #5a6169;
  background: #f7f7ff;
  text-align: center;

  thead {
    color: rgb(88, 110, 141);
    background: rgb(245, 248, 250);
  }

  tr {
    border-radius: 10px;
    border: 1px solid rgb(212, 218, 223);
  }

  th,
  td {
    padding: 10px 15px;
  }

  .header {
    text-align: center;
  }
`
export const Footnote = styled.p`
  font-size: 0.9em !important;
  margin: 0 !important;
  margin-left: 6px !important;
  color: grey;
  font-style: italic;
`
