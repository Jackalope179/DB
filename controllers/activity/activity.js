let activityModel = require('../../models/activity/activity')

class activityController {
    async getActivity(req, res) {
        res.render("activity/activity", {
            title: `THÔNG TIN HOẠT ĐỘNG`,
            activityList: await activityModel.getAllActivity()
        })
    }

    async editActivity(req, res) {
        let activity = req.body;
        await activityModel.editActivity(activity);
        res.redirect('/activity/activity');
    }

    async deleteActivity(req, res) {
        let activityID = req.body.activityID;
        await activityModel.deleteActivity(activityID);
        res.redirect('/activity/activity');
    }

    async addActivity(req, res) {
        let activity = req.body;
        await activityModel.addActivity(activity);
        res.redirect('/activity/activity');
    }

    async checkId(req, res) {
        let activityID = req.body.activityID;
        console.log(activityID);
        let data = await activityModel.checkid(activityID);
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