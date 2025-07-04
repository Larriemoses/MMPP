const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const firebaseAdmin = require("./firebase/admin");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Server is live 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
