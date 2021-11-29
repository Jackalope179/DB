var express = require('express');
var router = express.Router();
let teacherController = require('../controllers/teacher/teacher')
    /* GET home page. */
router.get('/teacher', teacherController.getTeacher);
router.post('/teacher/edit', teacherController.editTeacher)
router.post('/teacher/delete', teacherController.deleteTeacher)

router.post('/teacher/add', teacherController.addTeacher)
router.post('/teacher/checkid', teacherController.checkId)

module.exports = router;