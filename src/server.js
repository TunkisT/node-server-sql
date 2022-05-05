const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const PORT = 3000;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/productRoutes');

app.use('/', productRoutes);

app.get('/', (req, res) => {
  res.send('HELLO SQL');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
