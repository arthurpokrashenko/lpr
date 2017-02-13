require('babel-core/register')({});
require.extensions['.css'] = () => {
  return;
};

const app = require('./server');
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});