let connection = require('../../config')

exports.getAllsubject = async function() {
    return connection.awaitQuery(`SELECT * FROM subject`)
}

exports.editsubject = async function(subject) {
    await connection.awaitQuery(` UPDATE subject SET subjectName = '${subject.subjectName}', credit = ${subject.credit}, final_score_weight = ${subject.final_score_weight}, exercise_weight = ${subject.exercise_weight}, lab_score_weight = ${subject.lab_score_weight} where subjectID = '${subject.subjectID}' `)
}

exports.deleteSubject = async function(subjectID) {
    await connection.awaitQuery(`DELETE FROM subject WHERE subjectID = '${subjectID}'`)
}

exports.addSubject = async function(subject) {
    let lab_score_weight = 10 - (Number(subject.final_score_weight) + Number(subject.exercise_weight));
    await connection.awaitQuery(`INSERT INTO subject  VALUES ('${subject.subjectID}','${subject.subjectName}', ${subject.credit}, ${Number(subject.final_score_weight)}, ${Number(subject.exercise_weight)}, ${lab_score_weight})`)
}

exports.checkid = async function(subjectID) {
    return await connection.awaitQuery(`SELECT * FROM subject WHERE subjectID = '${subjectID}'`)
}