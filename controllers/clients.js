module.exports = {
  signUp: clientsCreate,
  getClientInfo: clientsGetInfo
};

const Client = require('../models/client');
const bcrypt  = require('bcrypt');

function clientsGetInfo(req, res){
  Client.find(req.body.email, (err, client) => {
    if (err) return res.status(500).json(err);
    if (!client) return res.status(404).json({ error: 'No client was found.' });
    return res.status(200).json(client);
  });
}

function clientsCreate(req, res){
  Client.create(req.body.client, (err, client) => {
    if (err) return res.status(500).json(err);
    user['clientIp'] = req.clientIp;
    user.save((err, user) => {
      if (err) return res.status(status).json({success: false});
      return res.status(201).json({success: true, message: `Welcome ${client.name}!`, user});
    });
  });
}
