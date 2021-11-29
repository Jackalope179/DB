var express = require('express');
var router = express.Router();
let activityController = require('../controllers/activity/activity')
let joinactivityController = require('../controllers/activity/joinactivity')
    /* GET home page. */
router.get('/activity', activityController.getActivity);
router.post('/joinactivity', joinactivityController.getActivity);



router.post('/activity/edit', activityController.editActivity)
router.post('/activity/delete', activityController.deleteActivity)

router.post('/activity/add', activityController.addActivity)
router.post('/activity/checkid', activityController.checkId)



router.post('/joinactivity/edit', joinactivityController.editActivity)
router.post('/joinactivity/delete', joinactivityController.deleteActivity)

router.post('/joinactivity/add', joinactivityController.addActivity)
router.post('/joinactivity/checkid', joinactivityController.checkId)

module.exports = router;