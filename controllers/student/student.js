let studentModel = require('../../models/student/student');
// const teacher = require('../teacher/teacher');

class studentController {
    async getStudent(req, res) {
        res.render("student/student", {
            title: `THÔNG TIN SINH VIÊN`,
            studentList: await studentModel.getAllStudent(),
            teacherList: await studentModel.getAllMsgvname(),
            deptList: await studentModel.getAllDeptname()
        })
    }

    // async getGroupClass(req, res) {
    //     res.render("study/groupclass", {
    //         title: `TỔ NHÓM`,
    //         subjectList: await groupclassModel.getAllGroupClass()
    //     })
    // }


    async editStudent(req, res) {
        let student = req.body;
        await studentModel.editStudent(student);
        res.redirect('/student/student');
    }

    async deleteStudent(req, res) {
        let MSSV = req.body.MSSV;
        console.log(MSSV);
        await studentModel.deleteStudent(MSSV);
        res.redirect('/student/student');
    }

    async addStudent(req, res) {
        let student = req.body;
        await studentModel.addStudent(student);
        res.redirect('/student/student');
    }

    async checkId(req, res) {
        let MSSV = req.body.MSSV;
        let data = await studentModel.checkid(MSSV);
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
module.exports = new studentController();