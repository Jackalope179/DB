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


exports.addGroupclass = async function(groupclass) {
    await connection.awaitQuery(`INSERT INTO groupclass  VALUES(
        '${groupclass.classID}', 
        '${groupclass.groupID}', 
        '${groupclass.subjectID}', 
        ${groupclass.year}, 
        ${groupclass.semester}, 
        '${groupclass.startTime}', 
        '${groupclass.endTime}', 
        '${groupclass.MSGV}' )`)
}

exports.searchSubject = async function(subject, len) {
    let str = `SELECT * FROM subject WHERE `
    let count = 0
    for (const key in subject) {
        if (subject[key] != '') {
            if (key == 'classID') {
                str += `classID LIKE '%${subject[key]}%'`
            } else if (key == 'groupID') {
                str += `groupID LIKE '%${subject[key]}%'`
            } else if (key == 'subjectName') {
                str += `subjectName LIKE '%${subject[key]}%'`
            } else if (key == 'fullName') {
                str += `fullName LIKE '%${subject[key]}%'`
            } else
                str += `${key} = '${subject[key]}'`
            count++;
            if (count != len)
                str += ` AND `
        }

    }
    console.log(str);
    return await connection.awaitQuery(`${str}`)
}
exports.searchGroupclass = async function(subject, len, year, semester) {
    let str = `SELECT * FROM ((groupclass natural join subject) natural join teacher) WHERE `
    let count = 0
    for (const key in subject) {
        if (subject[key] != '') {
            if (key == 'subjectName') {
                str += `subjectName LIKE '%${subject[key]}%'`
            } else
                str += `${key} = '${subject[key]}'`
            count++;
            if (count != len)
                str += ` AND `
        }

    }
    return await connection.awaitQuery(`${str}`)
}

exports.getInfo = async function(mssv) {
    return await connection.awaitQuery(`SELECT * FROM student natural join dependent WHERE mssv = '${mssv}'`)
}