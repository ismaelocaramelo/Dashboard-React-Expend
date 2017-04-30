const mongoose  = require('mongoose');
const validator = require('validator');


const ClientSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  accountingProvider: {type: String, enum: ['Xero', 'Crunch', 'Free Agent'], required: true},
  companySize: { type: Number, required: true }
});

// ClientSchema
//   .virtual('clientIp')
//   .set(setClientIp);

ClientSchema
  .path('email')
  .validate(validateEmail);


// function setClientIp(ip){
//   this._ip   = value;
//   this.ipHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
// }
//
// function validateClientIp(clientIp){
//   return bcrypt.compareSync(clientIp, this.ipHash);
// }
//
// ClientSchema.methods.validateClientIp = validateClientIp;


function validateEmail(email) {
  if (!validator.isEmail(email)) {
    return this.invalidate('email', 'must be a valid email address');
  }
}

ClientSchema.set('toJSON', {
  transform: function(doc, ret) {
    delete ret.__v;
    return ret;
  }
});




module.exports = mongoose.model('Client', ClientSchema);
