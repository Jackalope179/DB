let joinactivityModel = require('../../models/activity/activity')

class activityController {
    async getActivity(req, res) {
        let activityID = req.body.activityID;
        res.render("activity/activity", {
            title: `THÔNG TIN HOẠT ĐỘNG`,
            joinactivityList: await joinactivityModel.getActivity(activityID)
        })
    }

    async editActivity(req, res) {
        let activity = req.body;
        await joinactivityModel.editActivity(activity);
        res.redirect('/activity/activity');
    }

    async deleteActivity(req, res) {
        let MSSV = req.body.MSSV;
        await joinactivityModel.deleteActivity(MSSV);
        res.redirect('/activity/activity');
    }

    async addActivity(req, res) {
        let activity = req.body;
        await joinactivityModel.addActivity(activity);
        res.redirect('/activity/activity');
    }

    async checkId(req, res) {
        let MSSV = req.body.MSSV;
        console.log(MSSV);
        let data = await joinactivityModel.checkid(MSSV);
        if (data.length > 0) {
            res.json({
                status: "FOUND",
                data: data[0],
            });
        } else
            res.json({
                status: "NOT_FOUND",
            });
    }
}
module.exports = new activityController();