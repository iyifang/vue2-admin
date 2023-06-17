# 改写目录文件
- app.js
```
// 头部：改写1
var http = require('http');
var server = http.createServer(app);

// 最下面：改写2
server.listen('3000')
```
# packge.json
```  
"scripts": {
  "start": "node ./app"
},
```

# 连接失败问题
数据库连接使用的node-mysql模块不符合新版的规则
1. 终端
```
mysql -uroot -p
use mysql;
select user,host from user;
alter user 'root'@'localhost' identified with mysql_native_password by 'root123';
```

# 跨域问题
app.js
```
// 解决跨域问题
app.all("*", function (req, res, next) {
  // 设置允许跨域的域名,*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*');
  // 允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type');
  // 跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
  if (req.method.toLowerCase() == 'options')
    res.send(200); // 让options 尝试请求快速结束
  else
    next();
})
```