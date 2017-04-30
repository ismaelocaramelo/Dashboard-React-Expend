module.exports = {
  signUp: clientsCreate
};

const  fs    = require('fs');

function clientsCreate(req, res){
  fs.writeFile("signup.csv", "Hey there!", function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("The file was saved!");
  });
}




// name: { type: String, unique: true, required: true },
// email: { type: String, unique: true, required: true },
// accountingProvider: {type: String, enum: ['Xero', 'Crunch', 'Free Agent'], required: true},
// companySize: { type: Number, required: true }
