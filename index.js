const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// How assets will be served in production
if (process.env.NODE_ENV === 'production') {
  // Express will serve production assets
  app.use(express.static('client/build'));
  // Express will serve the index.html file if it doesn't recongize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is litening on port ${PORT}`);
});
