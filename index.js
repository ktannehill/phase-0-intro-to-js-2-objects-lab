// Write your solution in this file!

const employee = {
    name: "Sherlock Holmes",
    streetAddress: "221B Baker St, London",
};

function updateEmployeeWithKeyAndValue(employee, key, value) { 
    return { 
           ...employee, 
          [key]: value, 
     }; 
} 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    // create a copy of employee; delete key
    const newEmp = { ...employee.key }; 
    // return employee
    return newEmp;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};