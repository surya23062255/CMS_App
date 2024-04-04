// Define a empty array to put Customers data
let arrCus = [];

// Function for add customer in list
export function addCustomer(id, name, address, mobileNo) {
  let newCus = { id: id, name: name, address: address, mobileNo: mobileNo };
  arrCus.push(newCus);
}

// Function for search customer from list
export function searchCustomer(id) {
  let e = arrCus.find((e) => e.id == id);
  return e;
}

// Function for delete customer from list
export function deleteCustomer(id) {
  let index = arrCus.findIndex((e) => e.id == id);
  arrCus.splice(index, 1);
}

// Function for spread array for display
export function getCustomerList() {
  return [...arrCus];
}

// Function for modify customer details from the list
export function modifyCustomer(id, name, address, mobileNo) {
  let existingCus = arrCus.find((e) => e.id == id);
  if (existingCus) {
    existingCus.name = name;
    existingCus.address = address;
    existingCus.mobileNo = mobileNo;
  }
}
