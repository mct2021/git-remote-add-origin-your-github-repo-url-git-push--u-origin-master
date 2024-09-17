const express = require('express');
const app = express();
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Stripe Redirect Server!');
});

// Handle redirect
app.post('/handle-redirect', (req, res) => {
  const { checkout_url } = req.body;
  if (checkout_url) {
    // Logic to handle the URL
    res.status(200).send('URL received');
  } else {
    res.status(400).send('Missing checkout_url');
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
