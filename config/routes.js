const router     = require('express').Router();
const clients    = require('../controllers/clients');
const path       = require('path');

router.route('/')
  .get( (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

//Client Sign-up
router.route('/sign_up')
  .post(clients.signUp)

//Client Info
router.route('/accounting_platforms')
  .get(clients.getClientInfo)


module.exports = router;
