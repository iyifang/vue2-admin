var express = require('express');
var router = express.Router();
var db = require('../util/mysql')

router.post('/', function (req, res, next) {
  var sql = 'select * from users where username=? and password=?';
  var sqlAll = [req.body.name, req.body.password];
  var callBack = (err, data) => {
    if (err)
    {
      console.log('连接出错了', err);
      return
    } else
    {
      if (data[0] && data[0].username == req.body.name && data[0].password == req.body.password)
      {
        res.send({
          code: 200,
          message: '成功',
          data: {
            token: `${req.body.name}-token`,
            name: req.body.name
          }
        })
      } else
      {
        res.send({
          code: 0,
          message: '用户名或密码错误',
          data: {}
        })
      }
    }
  }
  db.sqlConnect(sql, sqlAll, callBack)
});

module.exports = router;