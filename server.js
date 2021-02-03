const express = require('express');

const path = require('path');

const app = express();

// app.use('/js', express.static(path.resolve(__dirname, 'src', 'js'))); //dev
console.log(__dirname);
app.use('/static', express.static(path.resolve(__dirname, 'src', 'static'))); //dev
// app.use('/static', express.static(path.resolve(__dirname, 'dist', 'static')));//prod

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'index.html')); //dev
  // res.sendFile(path.resolve(__dirname, 'dist', 'index.html')); //prod
});
app.listen(process.env.PORT || 5080, () => {
  console.log('server is running');
});
// app.listen(5080, () => {
//   console.log('server is running');
// });
