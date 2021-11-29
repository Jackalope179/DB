let connection = require('../../config')

exports.getAllDependent = async function() {
    return connection.awaitQuery(`SELECT * FROM dependent`)
}

exports.editDependent = async function(dependent) {
    await connection.awaitQuery(`UPDATE dependent SET phoneNumber='${dependent.phoneNumber}',relation='${dependent.relation}',job='${dependent.job}',address='${dependent.address}'  WHERE MSSV = '${dependent.MSSV}' AND fullName='${dependent.fullName}'`)
}

exports.deleteDependent = async function(MSSV, fullName) {
    await connection.awaitQuery(`DELETE FROM dependent WHERE MSSV = '${MSSV}' AND fullName = '${fullName}'`)
}


exports.addDependent = async function(dependent) {
    // let lab_score_weight = 10 - (Number(subject.final_score_weight) + Number(subject.exercise_weight));
    // await connection.awaitQuery(`INSERT INTO subject  VALUES ('${subject.subjectID}','${subject.subjectName}', ${subject.credit}, ${Number(subject.final_score_weight)}, ${Number(subject.exercise_weight)}, ${lab_score_weight})`)
    await connection.awaitQuery(`INSERT INTO dependent VALUES ('${dependent.MSSV}','${dependent.fullName}','${dependent.phoneNumber}','${dependent.relation}','${dependent.job}','${dependent.address}')`)
}

exports.checkid = async function(MSSV) {
    return await connection.awaitQuery(`SELECT * FROM student WHERE MSSV = '${MSSV}'`)
}