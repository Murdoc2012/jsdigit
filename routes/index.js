
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.partials = function (req, res) {
  var name = req.params.name;
  console.log('user: ' + req.session.username);
  var loggedIn = req.session.username !== undefined;
  console.log(loggedIn);
  if (name === 'admin' && !loggedIn) {
	  // login required:	  
	  res.render('partials/login');
  }
  else {
	  res.render('partials/' + name);
  }
};


exports.login = function(req, res){
	console.log('login');
	console.log(req.body);

	
	// if loggon successful:
	req.session.username = req.body.username;
	
	console.log(req.session);
	res.send('ok');
};

exports.logout = function(req, res){
	console.log('logout');
	console.log(req.body);
	
	
	// if logout successful:
	delete req.session.username;
	console.log(req.session);
	res.send('ok');
};
