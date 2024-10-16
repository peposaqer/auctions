// // server.js or your main entry file
// const path = require('path');

// const fs = require('fs');
// // Initialize Firebase Admin SDK
// const admin = require('firebase-admin');

// const serviceAccountPath = path.resolve(__dirname, process.env.GOOGLE_APPLICATION_CREDENTIALS);
// console.log(serviceAccountPath)
// if (!fs.existsSync(serviceAccountPath)) {
//   throw new Error(`Service account file not found at path: ${serviceAccountPath}`);
// }
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccountPath),
// });


// module.exports = admin;

require('dotenv').config();
const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');

// Ensure that the environment variable is set correctly
// if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
//   throw new Error('Environment variable GOOGLE_APPLICATION_CREDENTIALS is not set');
// }

// Resolve the path to the service account key file
// const serviceAccountPath = path.resolve(__dirname, process.env.GOOGLE_APPLICATION_CREDENTIALS);

// console.log('Service account path:', serviceAccountPath);

// Check if the file exists at the resolved path
// if (!fs.existsSync(serviceAccountPath)) {
//   throw new Error(`Service account file not found at path: ${serviceAccountPath}`);
// }

// const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert({
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
  })
});

module.exports = admin;
