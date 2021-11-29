var express = require('express');
var router = express.Router();

let studyModel = require('../models/study/study')
let mssvstudent = 0

router.get('/login', function(req, res) {
    res.render('login/index', { title: 'Login' });
})

router.post('/login', function(req, res) {
    let mssv = req.body.mssv;
    res.redirect(`/account/${mssv}`);
})

router.get('/account/:mssv', async function(req, res) {
    let mssv = req.params.mssv;
    let studyDetail = await studyModel.getAllStudy(mssv)
    let subjectStudy = await studyModel.getAllsubject(mssv)

    let studyDetailRender = []

    subjectStudy.forEach(subject => {
        let first = true
        let TKB = ``
        let temp;
        studyDetail.forEach(detail => {
            if (subject.subjectID == detail.subjectID) {
                if (first) {
                    TKB += detail.week
                    first = false;
                } else
                    TKB += `/` + detail.week;
                temp = detail;
            }
        });
        if (temp) {

            let startArray = temp.startTime.split(':');
            let starttime = startArray[0] + ':' + startArray[1]

            let endArray = temp.endTime.split(':');
            let endtime = endArray[0] + ':' + endArray[1]

            studyDetailRender.push(Object({
                ...temp,
                timing: starttime + '-' + endtime,
                week: TKB,
                groupClass: temp.classID + '-' + temp.groupID,
            }))
        }

    });
    let yearSemester = []
    let check = []
    studyDetail.forEach(detail => {
        let str = { year: detail.year, semester: detail.semester };
        let strcheck = detail.year + '-' + detail.semester;
        if (!check.includes(strcheck)) {
            check.push(strcheck)
            yearSemester.push(str);
        }
    })
    res.render('account/index', { mssv: mssv, yearSemester: yearSemester, studyDetail: studyDetailRender });
})

router.post('/login', function(req, res) {
    let mssv = req.body.mssv;
    let email = req.body.email;
    res.redirect('/account/' + mssv);
})

router.get('/score/:mssv', async function(req, res) {
    let mssv = req.params.mssv;
    let studyScore = await studyModel.getScore(mssv)

    let yearSemester = []
    let check = []

    studyScore.forEach(detail => {
        let str = { year: detail.year, semester: detail.semester };
        let strcheck = detail.year + '-' + detail.semester;
        if (!check.includes(strcheck)) {
            check.push(strcheck)
            yearSemester.push(str);
        }
    })
    console.log(studyScore);
    let studyRender = studyScore.map(detail => {
        if (detail.exercisescore == null) detail.exercisescore = `__`
        if (detail.labscore == null) detail.labscore = `__`
            // if (detail.midscore == null) detail.finalscore = `__`
        return {
            ...detail,
            score: `BTL : ` + detail.exercisescore + ` TH : ` + detail.labscore,
            groupClass: detail.classID + '-' + detail.groupID,
        }
    })
    res.render('score/index', {
        mssv: mssv,
        yearSemester: yearSemester,
        title: 'Score',
        studyScore: studyRender
    });
})


module.exports = router;