const axios = require("axios");
const uuidv4 = require("uuid/v4");

var key_var = "d615e56d534d49cbbcf08f595ac75df6";
if (!process.env[key_var]) {
  throw new Error(
    "Please set/export the following environment variable: " + key_var
  );
}
var subscriptionKey = process.env[key_var];
var endpoint_var =
  '"https://api.cognitive.microsofttranslator.com/translate?api-version=3.0';
if (!process.env[endpoint_var]) {
  throw new Error(
    "Please set/export the following environment variable: " + endpoint_var
  );
}
var endpoint = process.env[endpoint_var];
var region_var = "eastus";
if (!process.env[region_var]) {
  throw new Error(
    "Please set/export the following environment variable: " + region_var
  );
}
var region = process.env[region_var];

function translateText() {
  let options = {
    // method: "POST",
    baseUrl: endpoint,
    url: "translate",
    qs: {
      "api-version": "3.0",
      to: ["fr"],
    },
    headers: {
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "Ocp-Apim-Subscription-Region": region,
      "Content-type": "application/json",
      "X-ClientTraceId": uuidv4().toString(),
    },
    body: [
      {
        text: "STUFF TO TRANSLATE",
      },
    ],
    json: true,
  };
  let res = await axios.post("/url", options);
  request(options, function (err, res, body) {
    console.log(JSON.stringify(body, null, 4));
  });
}

// Call the function to translate text.
translateText();
