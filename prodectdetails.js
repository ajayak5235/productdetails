// app.js

const express = require('express');
const app = express();
const port = 3000; // You can choose any available port

// Define a sample product object (you would typically fetch this from a database)
const product = {
  id: 1,
  name: 'Sample Product',
  description: 'This is a sample product description.',
  price: 19.99,
};

// Define a route to serve the product details page
app.get('/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  // In a real application, you would fetch product details from a database using productId
  // For this example, we're using the sample product defined above
  if (productId === product.id) {
    res.send(`
      <h1>${product.name}</h1>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
    `);
  } else {
    res.status(404).send('Product not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
