// API base URL
const baseUrl = 'http://localhost:3001/api/v2/';

// Account API calls
export async function createAccount(token, accountData) {
  const response = await fetch(`${baseUrl}account/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(accountData),
  });
  return response.json();
}

export async function getAccountById(token, accountId) {
  const response = await fetch(`${baseUrl}account/${accountId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return response.json();
}

// Transaction API calls
export async function createTransaction(token, transactionData) {
  const response = await fetch(`${baseUrl}transaction/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(transactionData),
  });
  return response.json();
}

export async function getTransactionById(token, transactionId) {
  const response = await fetch(`${baseUrl}transaction/${transactionId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  });
  return response.json();
}

export async function putUpdateTransactionDescription(token, transactionId, newDescription) {
  const updatedData = {
    description: newDescription,
  };

  const response = await fetch(`${baseUrl}transaction/update/${transactionId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: 'Bearer ' + token,
    },
    body: JSON.stringify(updatedData),
  });
  return response.json();
}
