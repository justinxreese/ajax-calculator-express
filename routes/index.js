
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.calculate = function(req, res){
  var a = Number(req.query.a);
  var b = Number(req.query.b);
  res.send(JSON.stringify({result: a + b}));
};
