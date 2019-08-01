module.exports = (app) => {
    app.get('/pagamentos', (req, resp) => {
        console.log('\n/pagamentos');
        resp.send('OK')
    })

    app.post('/pagamentos/pagamento', (req, resp) => {
        var pagamento = req.body
        console.log('Recebido pagamento');
        pagamento.status = 'Criado'
        pagamento.data = new Date();

        var connection = app.persistencia.connectionFactory()
        var pagamentoDao = new app.persistencia.PagamentoDao(connetion)
        pagamentoDao.salva(pagamento, (erro, resultado)=> {
            console.log('Pagamento criado');
            resp.json(pagamento)
        })
        resp.send(pagamento)
    })
}
