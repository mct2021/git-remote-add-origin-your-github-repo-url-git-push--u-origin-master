const express = require('express');
const app = express();
app.use(express.json()); // To parse JSON data

// Define the /handle-redirect route
app.post('/handle-redirect', (req, res) => {
  const { checkout_url } = req.body;
  if (checkout_url) {
    console.log('Checkout URL received:', checkout_url);
    res.status(200).send('URL received');
  } else {
    res.status(400).send('Missing checkout_url');
  }
});

// Start the server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
