import React from "react";

function CustomerList(props) {

  function edit_btn(e){
    props.onEdit(e)
  }

  function del_btn(id) {
    props.onDelete(id);
  }

  return (
    <div className="container p-4 mb-5">
      <h3 className="text-center text-danger mb-5">
        All Customer Data
      </h3>

      <table className="table border border-info table-hover table-striped align-middle text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Mobile No.</th>
            <th>Modify</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody className="table-group-divider">
          {props.arrCus.map(e=>(
            <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.address}</td>
            <td>{e.mobileNo}</td>
            <td>
              <button onClick={() => edit_btn(e)} className="btn btn-success w-75 rounded-pill">
                Edit
              </button>
            </td>
            <td>
              <button onClick={() => del_btn(e.id)} className="btn btn-danger w-75 rounded-pill">
                Delete
              </button>
            </td>
          </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  );
}

export default CustomerList;
