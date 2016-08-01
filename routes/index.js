   var dbInit=require('../models/initDataBase.js');

   	var dbConfig = require('../models/db.js');
   	var mongoose = require('mongoose');
	mongoose.connect(dbConfig.url,function(err){
		if(!err){
			console.log('connected to mongo');
			new dbInit();
		}else{
			console.dir(err);
		}
		
	});



   	var company=require('../models/companies.js');
   	//var company=require('../models/companies.js');
   	var manager=require('../models/manager.js');
   	var rating=require('../models/ratings.js');
   	var User=require('../models/users.js');
   	var blog=require('../models/blog.js');

   	var comment=require('../models/comments.js');


   myRouter=function(_app,_passport){

   	
   	
	

	this.app=_app;
	this.passport=_passport;

	this.express=require('express');
	this.router=this.express.Router();
	var self=this;


	

	fbConfig=require('../models/fb.js');
	//this.googleConfig=require('../models/google.js');
	this.linkedinConfig=require('../models/linkedin.js');
	this.googleConfig=require('../models/google.js');

	

	var facebook_strategy=require("passport-facebook");
	var linkedin_strategy=require("passport-linkedin");
	var google_strategy=  require("passport-google-oauth2");

	
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
			    callbackURL: this.linkedinConfig.callbackURL,
			    profileFields: ['id', 'first-name', 'last-name', 'email-address', 'headline','specialties','positions','public-profile-url','picture-url']
			  },
			  function(token, tokenSecret, profile, done) {

			  	//console.dir(profile);
			  	console.log('linkedin  response is ____________________________________________________________________________________________')
			  	//console.dir(profile._json.positions);
			  	//console.dir(profile.emailaddress);
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

this.passport.use('google',new google_strategy({
    clientID:     this.googleConfig.googleClientId,
    clientSecret: this.googleConfig.googleAppSecret,
    //NOTE :
    //Carefull ! and avoid usage of Private IP, otherwise you will get the device_id device_name issue for Private IP during authentication
    //The workaround is to set up thru the google cloud console a fully qualified domain name such as http://mydomain:3000/ 
    //then edit your /etc/hosts local file to point on your private IP. 
    //Also both sign-in button + callbackURL has to be share the same url, otherwise two cookies will be created and lead to lost your session
    //if you use it.
    callbackURL: this.googleConfig.callbackUrl,
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
  	console.log('_________________________GOOGLE_______________________________')
  	//console.dir(profile);
    // asynchronous verification, for effect...
     process.nextTick(function() {
							     
							      // find the user in the database based on their facebook id
							      User.findOne({ 'google.id' : profile.id }, function(err, user) {
							 
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
							            newUser.google.id    = profile.id; // set the users facebook id                 
							           // newUser.linkedin.access_token = access_token; // we will save the token that facebook provides to the user                    
							            //newUser.facebook.firstName  = profile.name.givenName;
							            //newUser.facebook.lastName = profile.name.familyName; // look at the passport user profile to see how names are returned
							            //newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
							 			newUser.google.displayName=profile.displayName;

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

	this.router.get('/facebook', 
		  this.passport.authenticate('facebook', { scope : 'email' }
		));
	this.router.get('/linkedin', 
		  this.passport.authenticate('linkedin'
		));
	this.router.get('/google', 
		  this.passport.authenticate('google',{ scope: 
			  	[ 'https://www.googleapis.com/auth/plus.login',
			  	, 'https://www.googleapis.com/auth/plus.profile.emails.read',
			  	'https://www.googleapis.com/auth/userinfo.profile' ] }
		));

	
	this.router.get('/facebook/callback',
		  this.passport.authenticate('facebook', {
		    successRedirect : '/',
		    failureRedirect : '/about'
		  })
		);

	this.router.get('/linkedin/callback',
			  this.passport.authenticate('linkedin', {
			    successRedirect : '/',
			    failureRedirect : '/error'
			  })
			);
	// this.router.get('/google/callback',
	// 		  this.passport.authenticate('google', {
	// 		    successRedirect : '/',
	// 		    failureRedirect : '/error'
	// 		  })
	// 		);

	this.router.get( '/google/callback', 
	    this.passport.authenticate( 'google', { 
	        successRedirect: '/',
	        failureRedirect: '/error'
	}));


	// this.router.get( '/google/callback', function(req,res,next){

	// 				//console.dir(req);
	// 				//console.log('autenticating ......')
	// 				console.log('passport is .....................')
	// 				console.dir(self.passport);
	// 				self.passport.authenticate( 'google', { 
	// 			        successRedirect: '/',
	// 			        failureRedirect: '/error'
	// 		});
	//     });
	


	this.router.get( '/error', function(req,res,next){
	    res.render('error');
	}
	);

	// this.router.get( '/google/callback',function(req,res,next){
	// 		console.log('+++++++++++++++google callback +++++++++++++++++++')
	// });
	


	
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
		myRouter.prototype.blogPreRender(req,_app,function(blogArray){
				res.render('blog',{locals:{'user':req.user,'blogs':blogArray}});
		})
	  
	});

	this.router.get('/toprank', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.topRankPreRender(req,_app,function(managerArray){
				console.log('manager array is ....')
				//console.dir(managerArray);
				var page=1;
				if(req.query.page!==undefined){
					page=req.query.page;
				}
				var listLength=10;
				if(req.query.optradio!==undefined){
					listLength=req.query.optradio;
				}
				res.render('toprank',{locals:{'user':req.user,'managers':managerArray,'page':page,'listLength':listLength}});
		})


	  
	});

	this.router.post('/toprank', function(req, res, next) {

			
		myRouter.prototype.topRankPreRender_post(req,_app,function(managerArray){
				var page=1;
				if(req.query.page!==undefined){
					page=req.query.page;
				}
				var listLength=10;
				if(req.query.optradio!==undefined){
					listLength=req.query.optradio;
				}
				res.render('toprank',{locals:{'user':req.user,'managers':managerArray,'page':page,'listLength':listLength}});
		})


	  
	});

	this.router.post('/getComments', function(req, res, next) {

			
		myRouter.prototype.getCommentsPreRender_post(req,_app,function(blogObject){
				
				res.send(blogObject);
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
		myRouter.prototype.blogInnerPreRender(req,_app,function(blogResult){

				// var currentBlog=undefined;
				// for(i=0;i<blogResult.length;i++){
				// 	if(blogResult[i].blogID===req.query.blog){
				// 		currentBlog=blogResult[i];
				// 	}
				// }

				blog.find({},function(err,blogArray){
					res.render('blogInner',{locals:{'user':req.user,'blog':blogResult,'blogArray':blogArray}});
				})
				
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

	

	this.router.get('/addmanager',isLoggedIn ,function(req, res, next) {

		console.log('add manager   was requested  ');		
		myRouter.prototype.addManagerPreRender(req,_app,function(){
				console.log('rendering.....');
				res.render('addManager',{locals:{'user':req.user}});
		})

		
	  
	});

	//     For autofill  on   addManager page
	this.router.post('/findCompany',isLoggedIn,function(req,res,nect){
		var it=req.body.searchQ;
		//console.log('company is _+__)__)_)_')
		//console.dir(company);
		var searchRegex='(^'+it+'.*)|'+'( '+it+')';
		company.find({name:new RegExp(searchRegex,'i')},'name',{'sort': {'name': '-1'}, 'limit': 10},function(err,response){
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
		var searchRegex='(^'+it+'.*)|'+'( '+it+')';
		console.log(searchRegex);
		manager.find({$or:[{fullName:new RegExp(searchRegex,'i')},{currentCompany:new RegExp(searchRegex,'i')}]},'managerID fullName possition department currentCompany ',{'sort': {'fullName': '-1'}, 'limit': 10},function(err,response){
			if(err){
				console.dir(err);
			}
			//console.dir(response);
			res.send(response);
		})
	});


	this.router.get('/searchResult',function(req,res,next){

		    

			var it=req.query.name;
			//console.log('company is _+__)__)_)_')
			//console.dir(company);

			myRouter.prototype.searchResultPreRender(req,_app,function(result){


					res.render('searchResult',{locals:{'user':req.user,'searchResult':result}});
			})

			

	})
	//   Must Be Finished  :)))  oz Man
	this.router.post('/reply',function(req,res,nect){
		
		//console.dir(req.body);

		blog.findOne({'blogID':req.body.blogID},function(err,blogToComment){
			for(i=0;i<blogToComment.comments.length;i++){
				if(blogToComment.comments[i].commentID==req.body.parentID){
						
					var workingComment=blogToComment.comments[i];

					var newComment=new comment();
					newComment.comentID=req.body.commentID;

					if(req.body.userName!=='undefined'){
						newComment.userID=req.body.userID;
					}else{
						newComment.userID=guid();
					}

					//newComment.userID=req.body.userID;
					if(req.body.userName!=='undefined'){
						newComment.userName=req.body.userName;
					}else{
						newComment.userName='anonimous'
					}					
					newComment.effDate=getDate();
					newComment.comment=req.body.comment;
					newComment.reply=[];

					workingComment.reply.push(newComment);
					blogToComment.comments.set(i,workingComment);
					//blogToComment.comments[i].reply[blogToComment.comments[i].reply.length-1].isNew;
					//blogToComment.comments[i].reply.set(blogToComment.comments[i].reply.length-1,newComment);
					//blogToComment.markModified('comments');
					blogToComment.save(function(err,saved){
						if(!err){
							console.log('saved');
							for(j=0;j<blogToComment.comments.length;j++){
								if(blogToComment.comments[j].commentID==req.body.parentID){
									//console.dir(blogToComment.comments[j].reply[1]);
									res.send({'result':'1'})
								}
							}
						}else{
							//console.log('err');
							//console.dir(err);
							res.send({'result':'-1'})
						}
					})
				}
			}
		})



					// newComment.comentID=req.body.commentID;

					// newComment.userID=req.body.userID;
					// if(req.body.userName!==undefined){
					// 	newComment.userName=req.body.userName;
					// }else{
					// 	newComment.userName='anonimous'
					// }
					
					// newComment.effDate=getDate();
					// newComment.comment=req.body.comment;
					// newComment.reply=[];


	});

	this.router.post('/comment',function(req,res,nect){
		
		//console.dir(req.body);

		blog.findOne({'blogID':req.body.blogID},function(err,blogToComment){

					var newComment=new comment();
					newComment.commentID=req.body.commentID;

					if(req.body.userName!=='undefined'){
						newComment.userID=req.body.userID;
					}else{
						newComment.userID=guid();
					}

					//newComment.userID=req.body.userID;
					if(req.body.userName!=='undefined'){
						newComment.userName=req.body.userName;
					}else{
						newComment.userName='anonimous'
					}					
					newComment.effDate=getDate();
					newComment.comment=req.body.comment;
					newComment.reply=[];

					blogToComment.comments.push(newComment);

					blogToComment.save(function(err,savedBlog){
						if(!err){
							res.send({'result':'1'})
						}else{							
							res.send({'result':'-1'})
						}
					})


		})


	});


	this.router.post('/managerInseert',isLoggedIn,function(req,res,next){


			//console.dir(req.body);

			newManager=new manager();
			newManager.managerID=guid();
			newManager.fullName=req.body.managerName;
			newManager.possition=req.body.managerPossition;
			newManager.department=req.body.managerDepartment;
			newManager.currentCompany=req.body.addManagerAutoComplete_company;
			newManager.email=req.body.managerEmail;
			newManager.linkedinURL=req.body.managerLinkedIn;


			newManager.save(function(err,savedManager){
				if(err){
					res.redirect('/addManager',{locals:{'err':'Error Occured,Try again'}})
				}else{
					res.redirect('/manager?id='+newManager.managerID);
				}
			})

			


			//res.redirect('manager?id=asdasdasdasd');	
	})


	this.router.post('/rate',isLoggedIn, function(req,res,next){
		var rate=new rating();
		//console.dir(req.user);
		if(req.user.facebook.id!==undefined){
			rate.userID=req.user.facebook.id;
		}
		if(req.user.google.id!==undefined){
			rate.userID=req.user.google.id;
		}
		if(req.user.linkedin.id!==undefined){
			rate.userID=req.user.linkedin.id;
		}

		rate.rateDate=req.body.time;

		rate.recognition=req.body.recognition;
		rate.autonomy=req.body.autonomy;		
		rate.expectation=req.body.expectation;		
		rate.mentorship=req.body.mentorship;		
		rate.reward=req.body.reward;			

		rate.pros=req.body.pros;			
		rate.cons=req.body.cons;

		manager.findOne({'managerID':req.body.managerID},function(err,managerToRate){
			if(!err){
				//console.dir(managerToRate);
				var allreadyRated=false;
				if(managerToRate.rating!==undefined){
					for(i=0;i<managerToRate.rating.length;i++){
						if(managerToRate.rating[i].userID==rate.userID){
							allreadyRated=true;
							//res.redirect('/manager?id='+managerToRate.managerID);					
						}
					}
				}
				if(!allreadyRated){
					managerToRate.rating.push(rate);
					managerToRate.save(function(err,savedManager){
						//res.redirect('/manager?id='+managerToRate.managerID);
					})
				}

			}else{
				//res.redirect('/manager?id='+managerToRate.managerID);
			}	
			res.redirect('/manager?id='+managerToRate.managerID);
		})



	})

	this.router.post('/changeRate',isLoggedIn, function(req,res,next){
		//var rate=new rating();
		//console.dir(req.user);
		console.log('!!!!IMPORTANT!!!!  changeRate  was requested by POST');

		//console.dir(req.body);


		var userID=undefined;


		if(req.user.facebook.id!==undefined){
			userID=req.user.facebook.id;
		}
		if(req.user.google.id!==undefined){
			userID=req.user.google.id;
		}
		if(req.user.linkedin.id!==undefined){
			userID=req.user.linkedin.id;
		}
		console.log(userID+' is userID');
		
		// rate.rateDate=req.body.time;

		// rate.recognition=req.body.recognition;
		// rate.autonomy=req.body.autonomy;		
		// rate.expectation=req.body.expectation;		
		// rate.mentorship=req.body.mentorship;		
		// rate.reward=req.body.reward;			

		// rate.pros=req.body.pros;			
		// rate.cons=req.body.cons;
		console.log('looking for  manager with ID  '+req.body.managerID);
		manager.findOne({'managerID':req.body.managerID},function(err,managerToRate){
			if(!err){
				console.log('manager found!!');
				var allreadyRated=false;
				if(managerToRate.rating!==undefined){
					for(i=0;i<managerToRate.rating.length;i++){
						if(managerToRate.rating[i].userID==userID){
							console.log('updating ... ' +managerToRate.fullName)
							allreadyRated=true;
							//res.redirect('/manager?id='+managerToRate.managerID);		
							//managerToRate.rating[i].userID=userID;
								var rate=managerToRate.rating[i];
								// rate.rateDate=req.body.time;

								rate.recognition=req.body.recognition;
								rate.autonomy=req.body.autonomy;		
								rate.expectation=req.body.expectation;		
								rate.mentorship=req.body.mentorship;		
								rate.reward=req.body.reward;			

								rate.pros=req.body.pros;			
								rate.cons=req.body.cons;

								// managerToRate.rating[i].rateDate=req.body.time;

								// managerToRate.rating[i].recognition=req.body.recognition;
								// managerToRate.rating[i].autonomy=req.body.autonomy;		
								// managerToRate.rating[i].expectation=req.body.expectation;		
								// managerToRate.rating[i].mentorship=req.body.mentorship;		
								// managerToRate.rating[i].reward=req.body.reward;			

								// managerToRate.rating[i].pros=req.body.pros;			
								// managerToRate.rating[i].cons=req.body.cons;	
								managerToRate.rating.set(i,rate);		
								managerToRate.save(function(err,savedManager){
									if(err){
										console.log('error while saving');
										console.dir(err);
									}else{

										console.log('updated succesfully ');
										//console.dir(savedManager.rating);
									}
								})
						}
					}
				}
				// if(!allreadyRated){
				// 	managerToRate.rating.push(rate);
				// 	managerToRate.save(function(err,savedManager){
				// 		//res.redirect('/manager?id='+managerToRate.managerID);
				// 	})
				// }

			}else{
				console.dir(err);
			}	
			res.redirect('/manager?id='+managerToRate.managerID);
		})



	})
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

			blog.find({},function(err,result){
				callback(result);
			})


			//callback();
		}
myRouter.prototype.searchResultPreRender=function(req,app,callback){


	app.set('layout','layouts/all_pages_layout');


	var it=req.query.name;

	var searchRegex='(^'+it+'.*)|'+'( '+it+')';
			console.log(searchRegex);
			manager.find({$or:[{fullName:new RegExp(searchRegex,'i')},{currentCompany:new RegExp(searchRegex,'i')}]},'managerID fullName possition department currentCompany linkedinURL',{'sort': {'fullName': '-1'}, 'limit': 100},function(err,response){
				if(err){
					console.dir(err);
				}else{
					console.log('found array');
				}
				callback(response);
			})


}
myRouter.prototype.topRankPreRender=function(req,app,callback){
			// app.set('layout','layouts/all_pages_layout');

			// manager.find({},function(err,managerRes){
			// 	if(err){
			// 		callback(undefined)
			// 	}else{
			// 		callback(managerRes);
			// 	}
			// })
			console.log('manager is ....');
			//console.dir(myRouter.manager);

			app.set('layout','layouts/all_pages_layout');
			console.log('@@@@@@@@@@@@@')
			console.log(req.query.searchQ);

			if(req.query.searchQ===undefined || req.query.searchQ===''){
					manager.find({},function(err,managerRes){
						if(err){
							callback(undefined)
						}else{
							callback(managerRes);
						}
					})

			}else{
				manager.find({'fullName':req.query.searchQ},function(err,managerRes){
					if(err){
						callback(undefined)
					}else{
						callback(managerRes);
					}
				})
			}
			//callback();
		}

myRouter.prototype.topRankPreRender_post=function(req,app,callback){
			app.set('layout','layouts/all_pages_layout');


			if(req.query.searchQ==''){
					manager.find({'fullName':req.body.searchQ},function(err,managerRes){
						if(err){
							callback(undefined)
						}else{
							callback(managerRes);
						}
					})

			}else{
				manager.find({'fullName':req.body.searchQ},function(err,managerRes){
					if(err){
						callback(undefined)
					}else{
						callback(managerRes);
					}
				})
			}
			


			//callback();
		}


myRouter.prototype.aboutUsPreRender=function(req,app,callback){
	app.set('layout','layouts/all_pages_layout');
	callback();
}

myRouter.prototype.blogInnerPreRender=function(req,app,callback){
	app.set('layout','layouts/all_pages_layout');

	blog.findOne({'blogID':req.query.blog},function(err,blogResult){
			
			if(blogResult.viewCounter==''){
				blogResult.viewCounter='0';
			}else{
				blogResult.viewCounter=''+(parseInt(blogResult.viewCounter)+1);
			}
			blogResult.save(function(err,saved){
				callback(blogResult);
			})


			
	})

	
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

myRouter.prototype.getCommentsPreRender_post=function(req,app,callback){

	//console.dir(req.body);
	blog.findOne({'blogID':req.body.blog},function(err,result){
		callback(result);
	})
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


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}


function getDate(){
	var currentdate = new Date(); 
    var month=''
    if((''+currentdate.getMonth()).length==1){
        month='0'+(currentdate.getMonth()+1);
    }else{
        month=currentdate.getMonth();;
    }

    var day=''
    if((''+currentdate.getDate()).length==1){
        day='0'+currentdate.getDate();
    }else{
        day=currentdate.getDate();
    }
    var datetime = currentdate.getFullYear()+'-'+month+'-'+day;
    return datetime;
}

module.exports.myRouter=myRouter;