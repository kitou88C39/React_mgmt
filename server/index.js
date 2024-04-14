const express = require('express');
require('dotenv').config();
const { graphQlHTTP } = require('express-graphql');
const port = process.env.PORT || 8000;

const app = express();

app.listen(port, console.log(`Server running on port ${port}`));
