const { editSpreadsheet } = require('./editGoogleSheet');

(async function () {
  try {
    await editSpreadsheet()
    console.log('OK');
  } catch (error) {
    console.error(error)
  }
})()