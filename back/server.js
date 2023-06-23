const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors({ origin: true }));

app.get('/', (req, res) => {
  res.send('Olá mundo 5');
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});