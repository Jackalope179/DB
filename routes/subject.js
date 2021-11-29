var express = require('express');
var router = express.Router();
let subjectController = require('../controllers/study/subject')
let classroomController = require('../controllers/classroom/classroom')
let subjectModal = require('../models/study/subject')
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

module.exports = router;