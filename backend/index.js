// Step 1: Node.js এর express library include করা
const express = require('express');  

// Step 2: Express app তৈরি করা
const app = express();  

// Step 3: Port define করা
const PORT = 5000;  

// Step 4: Middleware – JSON request handle করার জন্য
app.use(express.json());

// Step 5: Root route তৈরি করা (browser/terminal test)
app.get('/', (req, res) => {
  res.send('Server is running'); // Response পাঠাবে
});

// Step 6: Server চালানো
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
