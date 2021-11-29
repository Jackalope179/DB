let connection = require('../../config')

exports.getAllTeacher = async function() {
    // return connection.awaitQuery(`SELECT * FROM Teacher`)
    return connection.awaitQuery(`SELECT MSGV, fullName, phoneNumber, position, YEAR(join_school_Year) AS join_school_Year, teacher.departmentID, schoolEmail, personalEmail, address, salary, departmentName FROM teacher, department WHERE teacher.departmentID = department.departmentID`)
}

exports.getAllDeptname = async function() {
    // return connection.awaitQuery(`SELECT * FROM student`)
    return connection.awaitQuery(`SELECT departmentID, departmentName FROM department`)
}

exports.editTeacher = async function(teacher) {
    await connection.awaitQuery(`UPDATE teacher SET fullName='${teacher.fullName}',phoneNumber='${teacher.phoneNumber}',position='${teacher.position}',join_school_Year='${teacher.join_school_Year}',departmentID='${teacher.departmentID}',schoolEmail='${teacher.schoolEmail}',personalEmail='${teacher.personalEmail}',address='${teacher.address}',salary='${teacher.salary}' WHERE MSGV='${teacher.MSGV}' `)

}

exports.deleteTeacher = async function(MSGV) {
    await connection.awaitQuery(`DELETE FROM teacher WHERE MSGV = '${MSGV}'`)
}


exports.addTeacher = async function(teacher) {
    await connection.awaitQuery(`INSERT INTO teacher VALUES ('${teacher.MSGV}','${teacher.fullName}','${teacher.phoneNumber}','${teacher.position}','${teacher.join_school_Year}','${teacher.departmentID}','${teacher.schoolEmail}','${teacher.personalEmail}','${teacher.address}','${teacher.salary}')`)

}

exports.checkid = async function(MSGV) {
    return await connection.awaitQuery(`SELECT * FROM teacher WHERE MSGV = '${MSGV}'`)
}