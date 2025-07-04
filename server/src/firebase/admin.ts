const admin = require("firebase-admin");
const serviceAccount = require("./mentorship-app-2d31b-firebase-adminsdk-fbsvc-79a39dba4c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
