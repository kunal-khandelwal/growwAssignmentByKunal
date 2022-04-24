import React from "react";
import { useLocation } from "react-router-dom";

const Bankitem = (props) => {
  const item = useLocation().state;
  console.log(item);
  return (
    <>
      <h1>Bank item</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Bank Id</th>
            <th>IFSC</th>
            <th>Bank Name</th>
            <th>Branch</th>
            <th>City</th>
            <th>District</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{item.ifsc}</td>
            <td>{item.bank_id}</td>
            <td>{item.bank_name}</td>
            <td>{item.branch}</td>
            <td>{item.city}</td>
            <td>{item.district}</td>
            <td>{item.state}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Bankitem;
