const Account = require('../database/models/accountModel');
const Transaction = require('../database/models/transactionModel');
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
