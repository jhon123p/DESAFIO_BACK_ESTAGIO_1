
const admin = require("firebase-admin");

const serviceAccount = require("../../service.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://teste-4e580-default-rtdb.firebaseio.com"
});
const bancoDeDados = admin.database()
module.exports = bancoDeDados

/*
CONFIGURAÇAO FIREBASE ADMIN 

*/