var express = require('express');
var router = express.Router();
let studentController = require('../controllers/student/student')
let dependentController = require('../controllers/student/dependent')
    /* GET home page. */
router.get('/student', studentController.getStudent);
router.get('/dependent', dependentController.getDependent);
// router.get('/groupclass', subjectController.getGroupClass);
// router.get('/groupclass/:year.:semester', subjectController.getGroupClassDetail);
// router.get('/classroom', classroomController.getAllClassroom)
router.post('/student/edit', studentController.editStudent)
router.post('/student/delete', studentController.deleteStudent)

router.post('/student/add', studentController.addStudent)
router.post('/student/checkid', studentController.checkId)


router.post('/dependent/edit', dependentController.editDependent)
router.post('/dependent/delete', dependentController.deleteDependent)

router.post('/dependent/add', dependentController.addDependent)
router.post('/dependent/checkid', dependentController.checkId)

module.exports = router;