let connection = require('../../config')

exports.getAllActivity = async function() {
    return connection.awaitQuery(`SELECT * FROM social_activity`)
}

exports.editActivity = async function(activity) {
    await connection.awaitQuery(`UPDATE social_activity SET activityName='${activity.activityName}',startDate='${activity.startDate}',endDate='${activity.endDate}',totalDay='${activity.totalDay}',departmentID='${activity.departmentID}',maxstudent='${activity.maxstudent}' WHERE activityID='${activity.activityID}' `)
}

exports.deleteActivity = async function(activityID) {
    await connection.awaitQuery(`DELETE FROM social_activity WHERE activityID = '${activityID}'`)
}


exports.addActivity = async function(activity) {
    await connection.awaitQuery(`INSERT INTO social_activity VALUES ('${activity.activityID}','${activity.activityName}','${activity.startDate}','${activity.endDate}','${activity.totalDay}','${activity.departmentID}','${activity.maxstudent}')`)
}

exports.checkid = async function(activityID) {
    return await connection.awaitQuery(`SELECT * FROM social_activity WHERE activityID = '${activityID}'`)
}