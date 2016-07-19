   var dbInit=require('../models/initDataBase.js')();
   	var company=require('../models/companies.js');
   	var manager=require('../models/manager.js');

   	
   myRouter=function(_app,_passport){
   	

	this.app=_app;
	this.passport=_passport;

	this.express=require('express');
	this.router=this.express.Router();
	var self=this;


	this.dbConfig = require('../models/db.js');

	fbConfig=require('../models/fb.js');
	//this.googleConfig=require('../models/google.js');
	this.linkedinConfig=require('../models/linkedin.js');
	this.googleConfig=require('../models/google.js');

	this.mongoose = require('mongoose');
	this.mongoose.connect(this.dbConfig.url);

	var facebook_strategy=require("passport-facebook");
	var linkedin_strategy=require("passport-linkedin");
	var google_strategy=  require("passport-google-oauth");

	var User=require('../models/users.js');
	this.passport.serializeUser(function(user, done) {
		  done(null, user._id);
		});
 
	this.passport.deserializeUser(function(id, done) {
	  User.findById(id, function(err, user) {
	    done(err, user);
	  });
	});
	this.passport.use('facebook', new facebook_strategy({
							  clientID        : fbConfig.appID,
							  clientSecret    : fbConfig.appSecret,
							  callbackURL     : fbConfig.callbackUrl
							},
							 
							  // facebook will send back the tokens and profile
							  function(access_token, refresh_token, profile, done) {
							    // asynchronous
							    //console.dir(profile);
							    process.nextTick(function() {
							     
							      // find the user in the database based on their facebook id
							      User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
							 
							        // if there is an error, stop everything and return that
							        // ie an error connecting to the database
							        if (err)
							          return done(err);
							 
							          // if the user is found, then log them in
							          if (user) {
							            return done(null, user); // user found, return that user
							          } else {
							            // if there is no user found with that facebook id, create them
							            var newUser = new User();
							            //console.dir(newUser);
							 		
							            // set all of the facebook information in our user model
							            newUser.facebook.id    = profile.id; // set the users facebook id                 
							            newUser.facebook.access_token = access_token; // we will save the token that facebook provides to the user                    
							            //newUser.facebook.firstName  = profile.name.givenName;
							            //newUser.facebook.lastName = profile.name.familyName; // look at the passport user profile to see how names are returned
							            //newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
							 			newUser.facebook.displayName=profile.displayName;

							            // save our user to the database
							            newUser.save(function(err) {
							              if (err)
							                throw err;
							 
							              // if successful, return the new user
							              return done(null, newUser);
							            });
							         } 
							      });
							    });
							}));
								
	this.passport.use(new linkedin_strategy({
			    consumerKey: this.linkedinConfig.consumerKey,
			    consumerSecret: this.linkedinConfig.consumerSecret,
			    callbackURL: this.linkedinConfig.callbackURL
			  },
			  function(token, tokenSecret, profile, done) {
			  	console.log('linkedin  response is ____________________________________________________________________________________________')
			  	//console.dir(profile);
			  	 process.nextTick(function() {
							     
							      // find the user in the database based on their facebook id
							      User.findOne({ 'linkedin.id' : profile.id }, function(err, user) {
							 
							        // if there is an error, stop everything and return that
							        // ie an error connecting to the database
							        if (err)
							          return done(err);
							 
							          // if the user is found, then log them in
							          if (user) {
							            return done(null, user); // user found, return that user
							          } else {
							            // if there is no user found with that facebook id, create them
							            var newUser = new User();
							            //console.dir(newUser);
							 		
							            // set all of the facebook information in our user model
							            newUser.linkedin.id    = profile.id; // set the users facebook id                 
							           // newUser.linkedin.access_token = access_token; // we will save the token that facebook provides to the user                    
							            //newUser.facebook.firstName  = profile.name.givenName;
							            //newUser.facebook.lastName = profile.name.familyName; // look at the passport user profile to see how names are returned
							            //newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
							 			newUser.linkedin.displayName=profile.displayName;

							            // save our user to the database


							            newUser.save(function(err) {
							              if (err)
							                throw err;
							 
							              // if successful, return the new user
							              return done(null, newUser);
							            });
							         } 
							      });
							    });


			  }
			));


// this.passport.use(new google_strategy({
// 			    returnURL: this.googleConfig.returnURL,
//     			realm: this.googleConfig.realm
// 			  },
// 			  function(token, tokenSecret, profile, done) {
// 			  	console.log('google  response is ____________________________________________________________________________________________')
// 			  	console.dir(profile);
// 			  	 process.nextTick(function() {
							     
// 							      // find the user in the database based on their facebook id
// 							      User.findOne({ 'google.id' : profile.id }, function(err, user) {
							 
// 							        // if there is an error, stop everything and return that
// 							        // ie an error connecting to the database
// 							        if (err)
// 							          return done(err);
							 
// 							          // if the user is found, then log them in
// 							          if (user) {
// 							            return done(null, user); // user found, return that user
// 							          } else {
// 							            // if there is no user found with that facebook id, create them
// 							            var newUser = new User();
// 							            //console.dir(newUser);
							 		
// 							            // set all of the facebook information in our user model
// 							            newUser.google.id    = profile.id; // set the users facebook id                 
// 							           // newUser.linkedin.access_token = access_token; // we will save the token that facebook provides to the user                    
// 							            //newUser.facebook.firstName  = profile.name.givenName;
// 							            //newUser.facebook.lastName = profile.name.familyName; // look at the passport user profile to see how names are returned
// 							            //newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
// 							 			newUser.google.displayName=profile.displayName;

// 							            // save our user to the database


// 							            newUser.save(function(err) {
// 							              if (err)
// 							                throw err;
							 
// 							              // if successful, return the new user
// 							              return done(null, newUser);
// 							            });
// 							         } 
// 							      });
// 							    });


// 			  }
// 			));



	this.router.get('/facebook', 
		  this.passport.authenticate('facebook', { scope : 'email' }
		));
	this.router.get('/linkedin', 
		  this.passport.authenticate('linkedin'
		));
	this.router.get('/google', 
		  this.passport.authenticate('google'
		));

	
	this.router.get('/facebook/callback',
		  this.passport.authenticate('facebook', {
		    successRedirect : '/',
		    failureRedirect : '/error'
		  })
		);

	this.router.get('/linkedin/callback',
			  this.passport.authenticate('linkedin', {
			    successRedirect : '/',
			    failureRedirect : '/error'
			  })
			);
	this.router.get('/google/callback',
			  this.passport.authenticate('google', {
			    successRedirect : '/',
			    failureRedirect : '/error'
			  })
			);


	
	//______________________________________________VISITOR_______________________________________________
	this.router.get('/', function(req, res, next) {

		//console.dir(req.session);	
		myRouter.prototype.indexPreRender(req,_app,function(){
				res.render('index',{locals:{'user':req.user}});
		})
	  
	});

	


	this.router.get('/terms', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.termsPreRender(req,_app,function(){
				res.render('terms',{locals:{'user':req.user}});
		})
	  
	});

	this.router.get('/faq', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.faqPreRender(req,_app,function(){
				res.render('faq',{locals:{'user':req.user}});
		})
	  
	});

	this.router.get('/blog', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.blogPreRender(req,_app,function(){
				res.render('blog',{locals:{'user':req.user}});
		})
	  
	});

	this.router.get('/toprank', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.topRankPreRender(req,_app,function(managerArray){
				res.render('toprank',{locals:{'user':req.user,'managers':managerArray}});
		})


	  
	});


	this.router.get('/about', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.aboutUsPreRender(req,_app,function(){
				res.render('aboutus',{locals:{'user':req.user}});
		})

		
	  
	});


	this.router.get('/blogInner', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.blogInnerPreRender(req,_app,function(){
				res.render('blogInner',{locals:{'user':req.user}});
		})

		
	  
	});
	
	this.router.get('/manager', function(req, res, next) {



		
		myRouter.prototype.managerInnerPreRender(req,_app,function(result){
				
				res.render('managerInnerPage',{locals:{'user':req.user,'manager':result}});
		})

		
	  
	});
	//_____________________________AUTHORIZED_____________________________________________

	this.router.get('/logout',isLoggedIn, function(req, res, next) {

		req.logOut();
		res.redirect('/');
	  
	});

	

	this.router.get('/addmanager', function(req, res, next) {

		console.log('add manager   was requested  ');		
		myRouter.prototype.addManagerPreRender(req,_app,function(){
				console.log('rendering.....');
				res.render('addManager',{locals:{'user':req.user}});
		})

		
	  
	});

	//     For autofill  on   addManager page
	this.router.post('/findCompany',function(req,res,nect){
		var it=req.body.searchQ;
		//console.log('company is _+__)__)_)_')
		//console.dir(company);
		company.find({name:new RegExp('^'+it,'i')},'name',{'sort': {'name': '-1'}, 'limit': '10'},function(err,response){
			if(err){
				//console.dir(err);
			}
			//console.dir(response);
			res.send(response);
		})
	});

	//     For autofill  on   addManager page
	this.router.post('/findManagers',function(req,res,nect){
		var it=req.body.searchQ;
		//console.log('company is _+__)__)_)_')
		//console.dir(company);
		manager.find({fullName:new RegExp('^'+it,'i')},'managerID fullName possition department currentCompany ',{'sort': {'fullName': '-1'}, 'limit': '10'},function(err,response){
			if(err){
				//console.dir(err);
			}
			//console.dir(response);
			res.send(response);
		})
	});
/*

	//________________________________REGISTERED________________________________

	this.router.get('/user', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.indexPreRender_registered(req,_app,function(){
				res.render('index');
		})
	  
	});

	this.router.get('/searchResult', function(req, res, next) {

			console.log('index was requested  ');		
			myRouter.prototype.searchresultPreRender_registered(req,_app,function(){
					res.render('searchResult');
			})
		  
		});


	this.router.get('/user/blog', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.blogPreRender_registered(req,_app,function(){
				res.render('blog');
		})
	  
	});

	this.router.get('/user/toprank', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.topRankPreRender_registered(req,_app,function(){
				res.render('toprank');
		})


	  
	});


	this.router.get('/user/about', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.aboutUsPreRender_registered(req,_app,function(){
				res.render('aboutus');
		})

		
	  
	});


	this.router.get('/user/blogInner', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.blogInnerPreRender_registered(req,_app,function(){
				res.render('blogInner');
		})

		
	  
	});


	this.router.get('/user/managerinnerpage', function(req, res, next) {

		console.log('manager InnerPage  was requested  ');		
		myRouter.prototype.managerInnerPreRender_registered(req,_app,function(){
				console.log('rendering.....');
				res.render('managerInnerPage');
		})

		
	  
	});

	this.router.get('/user/addmanager', function(req, res, next) {

		console.log('add manager   was requested  ');		
		myRouter.prototype.addManagerPreRender_registered(req,_app,function(){
				console.log('rendering.....');
				res.render('addManager');
		})

		
	  
	});
}


*/
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}


}
//_____________________________________________________________________________________registered_registered_registered
myRouter.prototype.indexPreRender=function(req,app,callback){
			app.set('layout','layouts/main_page_layout');
			callback();
		}

myRouter.prototype.termsPreRender=function(req,app,callback){
			app.set('layout','layouts/all_pages_layout');
			callback();
		}
myRouter.prototype.faqPreRender=function(req,app,callback){
			app.set('layout','layouts/all_pages_layout');
			callback();
		}


myRouter.prototype.blogPreRender=function(req,app,callback){
			app.set('layout','layouts/all_pages_layout');
			callback();
		}

myRouter.prototype.topRankPreRender=function(req,app,callback){
			app.set('layout','layouts/all_pages_layout');

			manager.find({},function(err,managerRes){
				if(err){
					callback(undefined)
				}else{
					callback(managerRes);
				}
			})


			//callback();
		}


myRouter.prototype.aboutUsPreRender=function(req,app,callback){
	app.set('layout','layouts/all_pages_layout');
	callback();
}

myRouter.prototype.blogInnerPreRender=function(req,app,callback){
	app.set('layout','layouts/all_pages_layout');
	callback();
}

myRouter.prototype.managerInnerPreRender=function(req,app,callback){
	app.set('layout','layouts/all_pages_layout');

	managerID=req.query.id;
	manager.findOne({'managerID':managerID},function(err,managerResult){
		if(err){
			console.log(err);
		}
		callback(managerResult);
	})



	//callback();
}

myRouter.prototype.addManagerPreRender=function(req,app,callback){
	app.set('layout','layouts/all_pages_layout');
	callback();
}

/*
//______________________________REGISTERED______________________________________________
myRouter.prototype.indexPreRender_registered=function(req,app,callback){
			app.set('layout','layouts/main_page_layout_registered');
			callback();
		}
myRouter.prototype.searchresultPreRender_registered=function(req,app,callback){
			app.set('layout','layouts/all_pages_layout');
			callback();
		}

myRouter.prototype.blogPreRender_registered=function(req,app,callback){
			app.set('layout','layouts/all_pages_layout_registered');
			callback();
		}

myRouter.prototype.topRankPreRender_registered=function(req,app,callback){
			app.set('layout','layouts/all_pages_layout_registered');
			callback();
		}


myRouter.prototype.aboutUsPreRender_registered=function(req,app,callback){
	app.set('layout','layouts/all_pages_layout_registered');
	callback();
}

myRouter.prototype.blogInnerPreRender_registered=function(req,app,callback){
	app.set('layout','layouts/all_pages_layout_registered');
	callback();
}

myRouter.prototype.managerInnerPreRender_registered=function(req,app,callback){
	app.set('layout','layouts/all_pages_layout_registered');
	callback();
}


myRouter.prototype.addManagerPreRender_registered=function(req,app,callback){
	app.set('layout','layouts/all_pages_layout_registered');
	callback();
}

*/

//____________________________________________________________________________________________
// var express = require('express');
// var router = express.Router();
// this.app;


// var initApp=function(_app){
// 	app=_app;
// };


// var indexPreRender=function(req,callback){
// 	//console.dir(app);
// 	this.app.set('layout','layouts/layout_0.0.1.ejs');
// 	callback();
// }




// /* GET home page. */
// router.get('/', function(req, res, next) {
// 	indexPreRender(req,function(){
// 			res.render('index');
// 	})
  
// });

//module.exports = router;
//module.exports.initApp=initApp;
module.exports.myRouter=myRouter;