import React, { useState } from "react";
import CustomerList from "./CustomerList";
import {
  addCustomer,
  deleteCustomer,
  getCustomerList,
  modifyCustomer,
  searchCustomer,
} from "../BLL/CustomerBLL";

function Customer(props) {
  // Create state Variabls
  let [id, setID] = useState("");
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  let [mobileNo, setmobileNo] = useState("");
  let [arrCus, setarrCus] = useState([]);

  // Functions for Value Change
  function id_OnChange(e) {
    setID(e.target.value);
  }
  function name_OnChange(e) {
    setName(e.target.value);
  }
  function address_OnChange(e) {
    setAddress(e.target.value);
  }
  function mobileNo_OnChange(e) {
    setmobileNo(e.target.value);
  }

  // Function for clear input fields
  function clearFields() {
    setID("");
    setName("");
    setAddress("");
    setmobileNo("");
  }

  // Functions for Add Customer
  function addBtn_click(e) {
    addCustomer(id, name, address, mobileNo);
    let arr = getCustomerList();
    setarrCus(arr);
    clearFields();
  }

  // Function for Search Customer
  function searchBtn_click(e) {
    var cus = searchCustomer(id);
    if (cus) {
      setName(cus.name);
      setAddress(cus.address);
      setmobileNo(cus.mobileNo);
    }
  }

  // Function for Edit Customer
  function editBtn_click(e) {
    setID(e.id);
    setName(e.name);
    setAddress(e.address);
    setmobileNo(e.mobileNo);
  }

  // Function for Delete Data from List
  function del_btn(id) {
    deleteCustomer(id);
    window.confirm("Are You Sure to Delete");
    setarrCus(getCustomerList());
  }


  // Function for Modify details of existing Customer
  function modifyBtn_click(e) {
    modifyCustomer(id, name, address, mobileNo);
    window.confirm("Are you sure to Modify");
    let newArr = getCustomerList();
    setarrCus(newArr);
    clearFields();
  }

  // CMS User Interface Code
  return (
    <>
      <div className="container mt-5 mb-3 p-4 text-light">
        <form>
          <h3 className="text-center text-danger mb-5">
            Customer Management System
          </h3>

          <div className="row mb-3">
            <label className="col-sm-2 fw-semibold col-form-label">Id :</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Id No."
                value={id}
                onChange={id_OnChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 fw-semibold col-form-label">
              Name :
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Your Name"
                value={name}
                onChange={name_OnChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 fw-semibold col-form-label">
              Address :
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Your Address"
                value={address}
                onChange={address_OnChange}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label className="col-sm-2 fw-semibold col-form-label">
              Mobile No. :
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control "
                placeholder="Enter Your Mobile No."
                value={mobileNo}
                onChange={mobileNo_OnChange}
              />
            </div>
          </div>
        </form>

        <button onClick={addBtn_click} className="btn btn-primary m-2">
          Add
        </button>
        <button onClick={searchBtn_click} className="btn btn-primary m-2">
          Search
        </button>
        <button onClick={modifyBtn_click} className="btn btn-primary m-2">
          Modify
        </button>
        <button onClick={clearFields} className="btn btn-primary m-2">
          Clear
        </button>
      </div>
      <hr />

      <div>
        <CustomerList
          arrCus={arrCus}
          onDelete={del_btn}
          onEdit={editBtn_click}
        />
      </div>
    </>
  );
}

export default Customer;
