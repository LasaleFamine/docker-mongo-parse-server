const express = require('express');
const ParseServer = require('parse-server').ParseServer;
const app = express();

const {
  APP_ID,
  MASTER_KEY,
  GCM_SENDER_ID,
  GCM_API_KEY,
  PFX_PATH_DEV,
  PFX_PASS_DEV,
  PFX_PATH_PROD,
  PFX_PASS_PROD,
  APP_BUNDLE_ID,
  IS_PRODUCTION
} = process.env;

const api = new ParseServer({
  databaseURI: 'mongodb://mongo-parse-server/', // Connection string for your MongoDB database
  appId: APP_ID,
  masterKey: MASTER_KEY,
  fileKey: 'optionalFileKey',
  serverURL: 'http://localhost:1337/parse', // Don't forget to change to https if needed
  push: {
    android: {
      senderId: GCM_SENDER_ID,
      apiKey: GCM_API_KEY
    },
    ios: [
      {
        pfx: PFX_PATH_DEV, // The filename of private key and certificate in PFX or PKCS12 format from disk
        passphrase: PFX_PASS_DEV, // optional password to your p12
        bundleId: APP_BUNDLE_ID, // The bundle identifier associate with your app
        production: false // Specifies which APNS environment to connect to: Production (if true) or Sandbox
      },
      {
        pfx: PFX_PATH_PROD, // Prod PFX or P12
        bundleId: PFX_PASS_PROD,
        production: true // Prod
      }
    ]
  }
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

app.listen(1337, () => {
  console.log('parse-server running on port 1337.');
});