module.exports = {
  signUp: clientsCreate
};

const  fs    = require('fs');

function clientsCreate(req, res){
  console.log(req.formData);
  fs.appendFile("signup.csv", "<req>", function(err) {
      if(err) {return console.log(err);}
      return res.status(200).json({calma: "Cr7"});
  });
}




// name: { type: String, unique: true, required: true },
// email: { type: String, unique: true, required: true },
// accountingProvider: {type: String, enum: ['Xero', 'Crunch', 'Free Agent'], required: true},
// companySize: { type: Number, required: true }
