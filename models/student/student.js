let connection = require('../../config')

exports.getAllStudent = async function() {
    // return connection.awaitQuery(`SELECT * FROM student`)
    return connection.awaitQuery(`SELECT s.MSSV AS MSSV, school_email, fname, midname, lname, s.phone AS phone, training_system, gender, social_day, GPA, personal_email, MSGV, s.departmentID AS departmentID,  TCTL, Khoa, departmentName, houseaddress, street, ward, district, city  FROM student s, department, address WHERE s.departmentID = department.departmentID AND s.MSSV = address.MSSV AND address.addressType = 'Thường trú'`)
}
exports.getAllMsgvname = async function() {
    // return connection.awaitQuery(`SELECT * FROM student`)
    return connection.awaitQuery(`SELECT MSGV, fullName FROM teacher`)
}
exports.getAllDeptname = async function() {
    // return connection.awaitQuery(`SELECT * FROM student`)
    return connection.awaitQuery(`SELECT departmentID, departmentName FROM department`)
}

exports.editStudent = async function(student) {
    await connection.awaitQuery(`UPDATE student SET school_email='${student.school_email}',fname='${student.fname}',midname='${student.midname}',lname='${student.lname}',phone='${student.phone}',training_system='${student.training_system}',gender='${student.gender}',social_day='${student.social_day}',GPA='${student.GPA}',personal_email='${student.personal_email}',MSGV='${student.MSGV}',TCTL='${student.TCTL}',Khoa='${student.Khoa}' WHERE MSSV = '${student.MSSV}' `)
    await connection.awaitQuery(`UPDATE address SET houseaddress='${student.houseaddress}',street='${student.street}',ward='${student.ward}',district='${student.district}',city='${student.city}' WHERE MSSV = '${student.MSSV}' AND addressType = 'Thường trú'`)

}

exports.deleteStudent = async function(MSSV) {
    await connection.awaitQuery(`DELETE FROM student WHERE MSSV = '${MSSV}'`)
}


exports.addStudent = async function(student) {
    await connection.awaitQuery(`INSERT INTO student VALUES ('${student.MSSV}','${student.school_email}','${student.fname}','${student.midname}','${student.lname}','${student.phone}','${student.training_system}','${student.gender}', '${student.social_day}', '${student.GPA}', '${student.personal_email}','${student.MSGV}','${student.departmentID}','${student.TCTL}','${student.Khoa}')`)
    await connection.awaitQuery(`INSERT INTO address VALUES ('${student.MSSV}','${student.houseaddress}','${student.street}','${student.ward}','${student.district}','${student.city}','Thường trú')`)

}

exports.checkid = async function(MSSV) {
    return await connection.awaitQuery(`SELECT * FROM student WHERE MSSV = '${MSSV}'`)
}