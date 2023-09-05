const express = require('express');
const router = express.Router();

const listaDeProdutos = [];

router.get('/', (req, res) => {
  res.send('Retorna todos os produtos cadastrados no sistema');
});

router.get('/:id', (req, res) => {
  const produtoId = req.params.id;
  res.send('Retorna o produto com o ID ' + produtoId);
});

router.get('/produtos', (req, res) => {
  res.json({
    mensagem: 'Lista de produtos cadastrados',
    produtos: listaDeProdutos,
  });
});

router.post('/', (req, res) => {
  console.log(req.body);

  const novoProduto = req.body;
  listaDeProdutos.push(novoProduto);

  res.json({
    mensagem: 'Produto adicionado com sucesso',
    produto: novoProduto,
  });
});

router.delete('/:id', (req, res) => {
  const produtoId = req.params.id;


  res.send('Produto com o ID ' + produtoId + ' foi excluído com sucesso.');
});

router.put('/:id', (req, res) => {
  const produtoId = req.params.id;
  const novoProduto = req.body;
  

  res.send('Produto com o ID ' + produtoId + ' foi atualizado com sucesso.');
});

module.exports = router;
