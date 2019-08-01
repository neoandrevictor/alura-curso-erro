function PagamentoDao(connection){
    this._connection = connection   
}

PagamentoDao.prototype.salva = (pagamento,callback) => {
    this._connection.query("insert into pagamentos set ?",pagamento, callback)   
}

PagamentoDao.prototype.lista = (callback)=>{
    this._connection.query("select * from pagamentos", callback)   
}

PagamentoDao.prototype.buscaPorId = (callback)=>{
    this._connection.query("select * from pagamentos where id = ?",[id], callback)
}

module.exports = ()=> { return PagamentoDao}