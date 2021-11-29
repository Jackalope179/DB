var express = require('express');
var router = express.Router();
let subjectController = require('../controllers/study/subject')
let classroomController = require('../controllers/classroom/classroom')
    /* GET home page. */
router.get('/subject', subjectController.getSubject);
router.get('/groupclass', subjectController.getGroupClass);
router.get('/groupclass/:year.:semester', subjectController.getGroupClassDetail);
router.get('/classroom', classroomController.getAllClassroom)
router.post('/subject/edit', subjectController.editSubject)
router.post('/subject/delete', subjectController.deleteSubject)
router.post('/subject/add', subjectController.addSubject)
router.post('/subject/checkid', subjectController.checkId)

module.exports = router;