const mongoose  = require('mongoose');
const validator = require('validator');


const ClientSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  accountingProvider: {type: String, enum: ['Xero', 'Crunch', 'Free Agent'], required: true},
  companySize: { type: Number, required: true }
});

ClientSchema
  .path('email')
  .validate(validateEmail);

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
