var express = require('express');
var router = express.Router();
let subjectController = require('../controllers/study/subject')
let classroomController = require('../controllers/classroom/classroom')
let subjectModal = require('../models/study/subject')
let groupclassModel = require('../models/study/groupclass')
    /* GET home page. */
router.get('/subject', subjectController.getSubject);
router.get('/groupclass', subjectController.getGroupClass);
router.get('/groupclass/:year.:semester', subjectController.getGroupClassDetail);
router.get('/classroom', classroomController.getAllClassroom)

router.post('/subject/edit', subjectController.editSubject)
router.post('/subject/delete', subjectController.deleteSubject)
router.post('/subject/add', subjectController.addSubject)
router.post('/subject/checkid', subjectController.checkId)


router.post('/groupclass/add', async function(req, res) {
    let groupclass = req.body;
    groupclass.startTime += ':00'
    groupclass.endTime += ':00'
    let year = Number(req.body.year);
    let semester = Number(req.body.semester);
    console.log(req.body);
    await subjectModal.addGroupclass(groupclass);
    res.redirect(`/study/groupclass/${year}.${semester}`);
})

router.post('/groupclass/search', async function(req, res) {
    let year = Number(req.body.year);
    let semester = Number(req.body.semester);
    let result = req.body;
    if (result['MSGV'] == 'GV_002')
        result['MSGV'] = ''
    let array = []
    for (const key in result) {
        if (result[key] != '') {
            array.push(key)
        }
    }
    let subjectList = await subjectModal.searchGroupclass(result, array.length, req.body.year, req.body.semester)
    let teacherList = await groupclassModel.getAllteacher();
    let allsubject = await subjectModal.getAllsubject();
    res.render("study/groupclass_detail", {
        title: `${year} - ${semester}`,
        subjectList: subjectList,
        teacherList: teacherList,
        year: year,
        semester: semester,
        allsubject: allsubject
    })
})


router.post('/search', async function(req, res) {
    let result = req.body;

    let array = []
    for (const key in result) {
        if (result[key] != '') {
            array.push(key)
        }
    }
    let subjectList = await subjectModal.searchSubject(result, array.length)

    res.render("study/subject", {
        title: `THÔNG TIN MÔN HỌC`,
        subjectList: subjectList
    })

})

module.exports = router;