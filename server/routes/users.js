var express = require('express');
var router = express.Router();
var db = require('../util/mysql')

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.query);
  var sql = 'select * from users where username=?';
  var sqlAll = [req.query.data];
  var callBack = (err, data) => {
    if (err)
    {
      console.log('连接出错了', err);
      return
    } else
    {
      res.send({
        code: 200,
        message: '成功',
        data
      })
    }
  }
  db.sqlConnect(sql, sqlAll, callBack);
});

module.exports = router;
