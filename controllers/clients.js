module.exports = {
  signUp: clientsCreate
};

const  fs    = require('fs');

function clientsCreate(req, res){
  const fileName = "signup.csv";
  fs.exists(fileName, function (exists) {

    var date           = new Date();
    var currentHours   = date.getHours();
    var currentMinutes = date.getMinutes();
    var currentSeconds = date.getSeconds();
    var currentTime    = `${currentHours}:${currentMinutes}:${currentSeconds}`

    var currentDay     = date.getDay();
    var currentMonth   = date.getMonth();
    var currentYear    = date.getYear();
    var currentDate    = `${currentDay}/${currentMonth}/${currentYear}`


    var logRegister = `${currentTime} ${currentDate}\t${req.clientIp}\t${req.body.formData.name}\t${req.body.formData.email}\t${req.body.formData.accountingProvider}\t${req.body.formData.companySize}\r\n`

    if(exists){
      fs.appendFile(fileName, logRegister, function(err) {
        if(err) {return console.log(err);}
        return res.send('All good');
      });
    }else{
      fs.writeFile(fileName, logRegister, function (err, data){
        return res.send('All good');
      })
    }
  });

}






// name: { type: String, unique: true, required: true },
// email: { type: String, unique: true, required: true },
// accountingProvider: {type: String, enum: ['Xero', 'Crunch', 'Free Agent'], required: true},
// companySize: { type: Number, required: true }
