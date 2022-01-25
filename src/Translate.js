const axios = require("axios");
var subscriptionKey = process.env.REACT_APP_SUBSCRIPTION_KEY;

var endpoint =
  "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0";

var region = "eastus";

export async function translateText(text) {
  let options = {
    headers: {
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "Ocp-Apim-Subscription-Region": region,
      "Content-Type": "application/json",
    },
    json: true,
  };

  try {
    let response = await axios.post(
      endpoint + "&to=hi&from=en&",
      { Text: text },
      options
    );
    console.log(JSON.stringify(response.body));
  } catch (error) {
    console.error(error);
  }
}

// Call the function to translate text.
// translateText();
