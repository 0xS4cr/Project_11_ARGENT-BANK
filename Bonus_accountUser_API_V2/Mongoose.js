// --------------- Modèles Mongoose ---------------

// Importation de mongoose
const mongoose = require('mongoose');

// Modèle Account
const accountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: false },
  button: { type: String, required: false }
});

const Account = mongoose.model('Account', accountSchema);

// Modèle Transaction
const transactionSchema = new mongoose.Schema({
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  balance: { type: Number, required: true },
  category: { type: String, required: false },
  note: { type: String, required: false }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = {
  Account,
  Transaction
};

// --------------- Fonctions de Service ---------------

const jwt = require('jsonwebtoken');

module.exports.getAccounts = async serviceData => {
  try {
    const jwtToken = serviceData.headers.authorization.split('Bearer ')[1];
    const decodedJwtToken = jwt.decode(jwtToken);

    const accounts = await Account.find({ userId: decodedJwtToken.id });

    if (!accounts) {
      throw new Error('No accounts found for the user!');
    }

    return accounts.map(account => ({
      accountId: account._id,
      title: account.title,
      amount: account.amount,
      description: account.description,
      button: account.button
    }));
  } catch (error) {
    console.error('Error in accountService.js', error);
    throw new Error(error);
  }
};

module.exports.getTransactions = async (serviceData, accountId) => {
  try {
    const transactions = await Transaction.find({ accountId: accountId });

    if (!transactions) {
      throw new Error('No transactions found for the account!');
    }

    return transactions.map(transaction => ({
      transactionId: transaction._id,
      date: transaction.date,
      description: transaction.description,
      amount: transaction.amount,
      balance: transaction.balance
    }));
  } catch (error) {
    console.error('Error in accountService.js', error);
    throw new Error(error);
  }
};

module.exports.updateTransaction = async (serviceData, transactionId) => {
  try {
    const updateData = {
      category: serviceData.body.category,
      note: serviceData.body.note
    };

    const transaction = await Transaction.findOneAndUpdate(
      { _id: transactionId },
      updateData,
      { new: true }
    );

    if (!transaction) {
      throw new Error('Transaction not found!');
    }

    return transaction;
  } catch (error) {
    console.error('Error in accountService.js', error);
    throw new Error(error);
  }
};

// --------------- Appels Client API ---------------

// API base URL
const baseUrl = 'http://localhost:3001/api/v2/';

// Account API calls
export async function getAccounts(token) {
  const response = await fetch(`${baseUrl}accounts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return response.json();
}

export async function getAccountTransactions(token, accountId) {
  const response = await fetch(`${baseUrl}accounts/${accountId}/transactions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return response.json();
}

// Transaction API calls
export async function getTransactionDetails(token, transactionId) {
  const response = await fetch(`${baseUrl}transactions/${transactionId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return response.json();
}

export async function updateTransaction(token, transactionId, updateData) {
  const response = await fetch(`${baseUrl}transactions/${transactionId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(updateData),
  });
  return response.json();
}
