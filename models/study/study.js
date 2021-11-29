let connection = require('../../config')

exports.getStudyByMssv = async function(mssv) {
    return connection.awaitQuery(`SELECT * FROM study, subject, week WHERE  `)
}

exports.getAllGroupClassDetail = async function(year, semester) {
    return connection.awaitQuery(`SELECT * FROM (groupclass natural join subject) WHERE year = ${year} and semester = ${semester}`)
}


exports.getAllStudy = async function(mssv) {
    return connection.awaitQuery(`select * from ((study natural join groupclass) NATURAL JOIN subject) NATURAL JOIN week WHERE study.MSSV = ${mssv};`)
}

exports.getAllsubject = async function(mssv) {
    return connection.awaitQuery(`SELECT * FROM study where mssv =${mssv}`)
}

exports.getScore = async function(mssv) {
    return connection.awaitQuery(`SELECT * FROM (study natural join groupclass) natural join subject where mssv =${mssv}`)
}