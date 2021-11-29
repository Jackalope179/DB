let connection = require('../../config')

exports.getAllDepartment = async function() {
    return connection.awaitQuery(`SELECT * FROM department`)
}

exports.editDepartment = async function(department) {
    await connection.awaitQuery(`UPDATE department SET departmentName='${department.departmentName}',establishYear='${department.establishYear}',MGR='${department.MGR}',studentQuanitty='${department.studentQuanitty}',totalSalary='${department.totalSalary}' WHERE departmentID='${department.departmentID}' `)
}

exports.deleteDepartment = async function(departmentID) {
    await connection.awaitQuery(`DELETE FROM department WHERE departmentID = '${departmentID}'`)
}


exports.addDepartment = async function(department) {
    // let lab_score_weight = 10 - (Number(subject.final_score_weight) + Number(subject.exercise_weight));
    // await connection.awaitQuery(`INSERT INTO subject  VALUES ('${subject.subjectID}','${subject.subjectName}', ${subject.credit}, ${Number(subject.final_score_weight)}, ${Number(subject.exercise_weight)}, ${lab_score_weight})`)
    await connection.awaitQuery(`INSERT INTO department VALUES ('${department.departmentID}','${department.departmentName}','${department.establishYear}','${department.MGR}','${department.studentQuanitty}','${department.totalSalary}')`)
}

exports.checkid = async function(departmentID) {
    return await connection.awaitQuery(`SELECT * FROM department WHERE departmentID = '${departmentID}'`)
}