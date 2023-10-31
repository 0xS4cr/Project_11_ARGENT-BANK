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

    return accounts;
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

    return transactions;
  } catch (error) {
    console.error('Error in accountService.js', error);
    throw new Error(error);
  }
};

module.exports.updateTransactionDescription = async (serviceData, accountId, transactionId) => {
  try {
    const jwtToken = serviceData.headers.authorization.split('Bearer ')[1];
    const decodedJwtToken = jwt.decode(jwtToken);

    const transaction = await Transaction.findOneAndUpdate(
      { _id: transactionId, accountId: accountId, userId: decodedJwtToken.id },
      { description: serviceData.body.description },
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
