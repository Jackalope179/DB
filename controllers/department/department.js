let departmentModel = require('../../models/department/department')

class departmentController {
    async getDepartment(req, res) {
        res.render("department/department", {
            title: `THÔNG TIN NGƯỜI THÂN`,
            departmentList: await departmentModel.getAllDepartment()
        })
    }

    async editDepartment(req, res) {
        let department = req.body;
        await departmentModel.editDepartment(department);
        res.redirect('/department/department');
    }

    async deleteDepartment(req, res) {
        let departmentID = req.body.departmentID;
        await departmentModel.deleteDepartment(departmentID);
        res.redirect('/department/department');
    }

    async addDepartment(req, res) {
        let department = req.body;
        await departmentModel.addDepartment(department);
        res.redirect('/department/department');
    }

    async checkId(req, res) {
        let departmentID = req.body.departmentID;
        console.log(departmentID);
        let data = await departmentModel.checkid(departmentID);
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
module.exports = new departmentController();