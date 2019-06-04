const express = require('express');
const router = express.Router();
const alertMessage = require('../helpers/messenger');
const Quiz = require('../models/Quiz');
const FAQ = require('../models/FAQ')

router.get('/admin-quiz', (req, res) => {
  let title = 'adminquiz'
  res.render('admin/admin-quiz', { title: title });
});

router.get('/faqform', (req, res) => {
  let title = 'faqform  '
  res.render('admin/faqform', { title: title });
});

router.post('/addqns', (req, res) => {
  let qns = req.body.qns;
  let ans = req.body.ans;

  FAQ.create({
    qns,
    ans
  }).then((form) => {
    res.redirect('/faq');
  })
    .catch(err => console.log(err))
});

router.post('/addquiz', (req, res) => {
  let question = req.body.question;
  let option1 = req.body.option1;
  let option2 = req.body.option2;
  let option3 = req.body.option3;
  let option4 = req.body.option4;
  let correct = req.body.correct;

  Quiz.create({
    question,
    option1,
    option2,
    option3,
    option4,
    correct,

  }).then((quizzes) => {
    res.redirect('/quiz');
  })
    .catch(err => console.log(err))
})
module.exports = router;