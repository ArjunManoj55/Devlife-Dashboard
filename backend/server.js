require('dotenv').config(); // Load .env variables

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is missing

app.listen(PORT, () => console.log(`IM ON ${PORT}`));
