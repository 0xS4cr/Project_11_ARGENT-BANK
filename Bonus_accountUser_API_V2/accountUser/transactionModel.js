const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  accountId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Account', 
    required: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  balance: { 
    type: Number, 
    required: true 
  },
  category: { 
    type: String, 
    required: false 
  }, 
  note: { 
    type: String, 
    required: false 
  } 
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
