const express = require('express');
const app = express();
app.use(express.json()); // For parsing application/json

app.post('/handle-redirect', (req, res) => {
  const checkoutUrl = req.body.checkout_url;
  if (checkoutUrl) {
    res.redirect(checkoutUrl);
  } else {
    res.status(400).send('No checkout URL provided.');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
