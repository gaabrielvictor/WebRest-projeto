const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const listaDeProdutos = [];
let proximoId = 1;


app.get('/produtos', (req, res) => {
  res.json(listaDeProdutos);
});


app.post('/produtos', (req, res) => {
  const novoProduto = req.body;
  novoProduto.id = proximoId.toString(); 
  proximoId++; 
  listaDeProdutos.push(novoProduto);
  res.json({
    mensagem: 'Produto adicionado com sucesso',
    produto: novoProduto,
  });
});


app.delete('/produtos/:id', (req, res) => {
  const produtoId = req.params.id;

  const produtoIndex = listaDeProdutos.findIndex((produto) => produto.id === produtoId);

  if (produtoIndex === -1) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }

  listaDeProdutos.splice(produtoIndex, 1);

  res.json({
    mensagem: 'Produto com o ID ' + produtoId + ' foi excluído com sucesso',
  });
});


app.put('/produtos/:id', (req, res) => {
  const produtoId = req.params.id;
  const novoProduto = req.body;

  const produtoIndex = listaDeProdutos.findIndex((produto) => produto.id === produtoId);

  if (produtoIndex === -1) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }

  listaDeProdutos[produtoIndex] = { ...listaDeProdutos[produtoIndex], ...novoProduto };

  res.json({
    mensagem: 'Produto com o ID ' + produtoId + ' foi atualizado com sucesso',
    produto: listaDeProdutos[produtoIndex],
  });
});


app.listen(5000, () => {
  console.log('A aplicação está no ar em http://localhost:5000');
});
