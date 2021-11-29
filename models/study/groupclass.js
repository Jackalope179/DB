let connection = require('../../config')

exports.getAllGroupClass = async function() {
    return connection.awaitQuery(`SELECT * FROM groupclass`)
}

exports.getAllGroupClassDetail = async function(year, semester) {
    return connection.awaitQuery(`SELECT * FROM ((groupclass natural join subject) natural join teacher) WHERE year = ${year} and semester = ${semester}`)
}

exports.getAllteacher = async function() {
    return connection.awaitQuery(`SELECT * FROM teacher`)
}