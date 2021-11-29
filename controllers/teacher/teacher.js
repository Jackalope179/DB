let teacherModel = require('../../models/teacher/teacher')

class teacherController {
    async getTeacher(req, res) {
        res.render("teacher/teacher", {
            title: `THÔNG TIN GIẢNG VIÊN`,
            teacherList: await teacherModel.getAllTeacher(),
            deptList: await teacherModel.getAllDeptname()
        })
    }

    async editTeacher(req, res) {
        let teacher = req.body;
        await teacherModel.editTeacher(teacher);
        res.redirect('/teacher/teacher');
    }

    async deleteTeacher(req, res) {
        let MSGV = req.body.MSGV;
        await teacherModel.deleteTeacher(MSGV);
        res.redirect('/teacher/teacher');
    }

    async addTeacher(req, res) {
        let teacher = req.body;
        await teacherModel.addTeacher(teacher);
        res.redirect('/teacher/teacher');
    }

    async checkId(req, res) {
        let MSGV = req.body.MSGV;
        let data = await teacherModel.checkid(MSGV);
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
module.exports = new teacherController();