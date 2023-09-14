// // Write your solution in this file!

// const employee = {
//     name: "Sherlock Holmes",
//     streetAddress: "221B Baker St, London",
// };

// function updateEmployeeWithKeyAndValue(employee, key, value) { 
//     return { 
//            ...employee, 
//           [key]: value, 
//      }; 
// } 

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value;
//     return employee;
// }

// function deleteFromEmployeeByKey(employee, key) {
//     // create a copy of employee; delete key
//     const newEmp = { ...employee.key }; 
//     // return employee
//     return newEmp;
// };

// console.log("P. Sherman", "42 Wallaby Way");
// console.log(employee);

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
// };

const employee = {
    name: "P Sherman",
    streetAddress: "42 Wallaby Way",
}

const updateEmployeeWithKeyAndValue = function(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    }
}

console.log(updateEmployeeWithKeyAndValue(employee, "City", "Sydney"))

const destructivelyUpdateEmployeeWithKeyAndValue = function(obj, key, value) {
    obj[key] = value
    return obj
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "I don't remember"))

const deleteFromEmployeeByKey = function(obj, key) {
    let newEmployee = {...obj}
    delete newEmployee[key]
    console.log(newEmployee)
    return newEmployee
}

deleteFromEmployeeByKey(employee, "name")

const destructivelyDeleteFromEmployeeByKey = function(obj, key) {
    delete obj[key]
    return obj
}

console.log(destructivelyDeleteFromEmployeeByKey(employee, "name"))