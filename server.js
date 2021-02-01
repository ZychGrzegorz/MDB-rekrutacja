const express = require('express');

const path = require('path');

const app = express();

// app.use('/js', express.static(path.resolve(__dirname, 'src', 'js')));
app.use('/static', express.static(path.resolve(__dirname, 'src', 'static')));
// app.use('/static', express.static(path.resolve(__dirname, 'dist', 'static')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
  // res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
app.listen(process.env.port||5080,()=>{console.log('server is running')})
// app.listen(5080, () => {
//   console.log('server is running');
// });
