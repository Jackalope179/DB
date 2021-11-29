let dependentModel = require('../../models/student/dependent')

class dependentController {
    async getDependent(req, res) {
        res.render("student/dependent", {
            title: `THÔNG TIN NGƯỜI THÂN`,
            dependentList: await dependentModel.getAllDependent()
        })
    }

    async editDependent(req, res) {
        let dependent = req.body;
        await dependentModel.editDependent(dependent);
        res.redirect('/student/dependent');
    }

    async deleteDependent(req, res) {
        let MSSV = req.body.MSSV;
        let fullName = req.body.fullName;
        await dependentModel.deleteDependent(MSSV, fullName);
        res.redirect('/student/dependent');
    }

    async addDependent(req, res) {
        let dependent = req.body;
        await dependentModel.addDependent(dependent);
        res.redirect('/student/dependent');
    }

    async checkId(req, res) {
        let MSSV = req.body.MSSV;
        let data = await dependentModel.checkid(MSSV);
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
module.exports = new dependentController();