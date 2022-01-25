const axios = require("axios");
//const uuid = require("uuid");

let subscriptionKey = process.env.REACT_APP_SUBSCRIPTION_KEY;

let endpoint =
  "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0";

let region = "eastus";

export async function translateTextEs(text) {
  const options = {
    headers: {
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "Ocp-Apim-Subscription-Region": region,
      "Content-Type": "application/json",
      //"X-ClientTraceId": uuid().toString()
    },
    json: true,
  };

  try {
    const response = await axios.post(
      endpoint + "&from=es&to=en&",
      [{ "Text": text }], options,
       );
    const result = JSON.stringify(response.data[0].translations[0].text);
    console.log(result)
  } catch (err) {
    console.error(err);
  }
}

// Call the function to translate text.
//translateText();
