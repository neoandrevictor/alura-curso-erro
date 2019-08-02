module.exports = (app) => {
    app.get('/pagamentos', (req, resp) => {
        console.log('\n/pagamentos');
        resp.send('OK')
    })

    app.post('/pagamentos/pagamento', function(req, res){

 

        var pagamento = req.body;
        console.log('processando uma requisicao de um novo pagamento');
    
        pagamento.status = 'CRIADO';
        pagamento.data = new Date;
    
        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(connection);
    
        pagamentoDao.salva(pagamento, function(erro, resultado){
          if(erro){
            console.log('Erro ao inserir no banco:' + erro);
            res.status(500).send(erro);
          } else {
          console.log('pagamento criado');
          res.location('/pagamentos/pagamento/' +
                resultado.insertId);
    
          res.status(201).json(pagamento);
        }
        });
    
      });
}
