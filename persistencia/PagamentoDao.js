function PagamentoDao(connection){
    this._connection = connection;   
}

PagamentoDao.prototype.salva = function (pagamento,callback) {
    console.log(this._connection)
    this._connection.query("insert into pagamentos set ?",pagamento, callback)   
}

PagamentoDao.prototype.lista = function (callback){
    this._connection.query("select * from pagamentos", callback) ;
}

PagamentoDao.prototype.buscaPorId = function (id,callback) {
    this._connection.query("select * from pagamentos where id = ?",[id], callback)
}

module.exports = function(){
    return PagamentoDao;
};
