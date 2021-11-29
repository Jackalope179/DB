let subjectModel = require('../../models/study/subject')
let groupclassModel = require('../../models/study/groupclass')

class subjectController {
    async getSubject(req, res) {
        res.render("study/subject", {
            title: `THÔNG TIN MÔN HỌC`,
            subjectList: await subjectModel.getAllsubject()
        })
    }

    async getGroupClass(req, res) {
        res.render("study/groupclass", {
            title: `TỔ NHÓM`,
            subjectList: await groupclassModel.getAllGroupClass()
        })
    }

    async getGroupClassDetail(req, res) {
        let params = req.params;
        let year = Number(params.year);
        let semester = Number(params.semester);

        let subjectList = await groupclassModel.getAllGroupClassDetail(year, semester);
        let teacherList = await groupclassModel.getAllteacher();
        let allsubject = await subjectModel.getAllsubject();
        res.render("study/groupclass_detail", {
            title: `${year} - ${semester}`,
            subjectList: subjectList,
            teacherList: teacherList,
            year: year,
            semester: semester,
            allsubject: allsubject
        })

    }

    async editSubject(req, res) {
        let subject = req.body;
        await subjectModel.editsubject(subject);
        res.redirect('/study/subject');
    }

    async deleteSubject(req, res) {
        let subjectID = req.body.subjectID;
        await subjectModel.deleteSubject(subjectID);
        res.redirect('/study/subject');
    }

    async addSubject(req, res) {
        let subject = req.body;
        await subjectModel.addSubject(subject);
        res.redirect('/study/subject');
    }

    async checkId(req, res) {
        let subjectId = req.body.subjectID;
        let data = await subjectModel.checkid(subjectId);
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
module.exports = new subjectController();