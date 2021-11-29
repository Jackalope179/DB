var express = require('express');
var router = express.Router();
let departmentController = require('../controllers/department/department')
    /* GET home page. */
router.get('/department', departmentController.getDepartment);



router.post('/department/edit', departmentController.editDepartment)
router.post('/department/delete', departmentController.deleteDepartment)

router.post('/department/add', departmentController.addDepartment)
router.post('/department/checkid', departmentController.checkId)

module.exports = router;