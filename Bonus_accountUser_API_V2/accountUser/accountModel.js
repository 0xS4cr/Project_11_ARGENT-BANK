const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  description: { 
    type: String, 
    required: false 
  },
  button: { 
    type: String, 
    required: false 
  },
});

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
