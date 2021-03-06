let connection = require('../../config')

exports.getAllDepartment = async function() {
    return connection.awaitQuery(`SELECT department.departmentID, departmentName, establishYear, MGR, studentQuanitty, totalSalary, fullName FROM department, teacher WHERE department.MGR = teacher.MSGV`)
}

exports.editDepartment = async function(department) {
    await connection.awaitQuery(`UPDATE department SET departmentName='${department.departmentName}',establishYear='${department.establishYear}',MGR='${department.MGR}',studentQuanitty='${department.studentQuanitty}',totalSalary='${department.totalSalary}' WHERE departmentID='${department.departmentID}' `)
}

exports.deleteDepartment = async function(departmentID) {
    await connection.awaitQuery(`DELETE FROM department WHERE departmentID = '${departmentID}'`)
}


exports.addDepartment = async function(department) {
    
    await connection.awaitQuery(`INSERT INTO department VALUES ('${department.departmentID}','${department.departmentName}','${department.establishYear}','${department.MGR}','${department.studentQuanitty}','${department.totalSalary}')`)
}

exports.checkid = async function(departmentID) {
    return await connection.awaitQuery(`SELECT * FROM department WHERE departmentID = '${departmentID}'`)
}