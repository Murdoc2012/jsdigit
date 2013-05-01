
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.partials = function (req, res) {
  var name = req.params.name;
  var notLoggedIn = true; // dummy
  if (name === 'admin' && notLoggedIn) {
	  // login required:
	  res.render('partials/login');
  }
  else {
	  res.render('partials/' + name);
  }
};
