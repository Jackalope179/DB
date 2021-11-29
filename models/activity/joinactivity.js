let connection = require('../../config')

exports.getActivity = async function(activityID) {
    return connection.awaitQuery(`SELECT student.MSSV, student.fname, student.midname, student.lname, student.school_email, joinactivity.dayReceive, joinactivity.joinDate FROM student, joinactivity WHERE student.MSSV = joinactivity.MSSV AND activityID = '${activityID}' `)
}

exports.editActivity = async function(activity) {
    await connection.awaitQuery(`UPDATE joinactivity SET activityID='${activity.activityID}',joinDate='${activity.joinDate}',dayReceive='${activity.dayReceive}' WHERE MSSV='${activity.MSSV}'`)
}

exports.deleteActivity = async function(MSSV) {
    await connection.awaitQuery(`DELETE FROM joinactivity WHERE MSSV = '${MSSV}'`)
}


exports.addActivity = async function(activity) {
    await connection.awaitQuery(`INSERT INTO joinactivity VALUES ('${activity.MSSV}','${activity.activityID}','${activity.joinDate}','${activity.dayReceive}')`)
}

exports.checkid = async function(MSSV) {
    return await connection.awaitQuery(`SELECT * FROM joinactivity WHERE MSSV = '${MSSV}'`)
}