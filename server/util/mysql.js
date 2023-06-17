const mysql = require('mysql')

module.exports = {
  config: {
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'admin',
    port: '3306'
  },
  // 连接对象
  sqlConnect: function (sql, sqlAll, callBack) {
    let poll = mysql.createPool(this.config)
    poll.getConnection((err, conn) => {
      if (err)
      {
        console.log('连接失败', err);
        return
      }
      // 查询
      conn.query(sql, sqlAll, callBack)
      // 关闭连接
      conn.release()
    })
  }
}
