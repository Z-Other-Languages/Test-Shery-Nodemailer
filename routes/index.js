var express = require('express');
const UserCollection = require('../models/user.schema');
const { sendMail } = require('../utils/sendMail');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'New Registration' });
});

router.post('/register', async (req, res, next) => {
  try {
    const user = new UserCollection(req.body);
    await user.save();

    res.redirect('/send-mail');
  } catch (err) {
    console.log(err.message);
    res.send(err)
  }
})

router.post('/send-mail', async (req, res, next) => {
  const user = new UserCollection(req.body);
  await user.save();
  
  sendMail(req, res)
})

module.exports = router;
