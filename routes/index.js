   myRouter=function(_app){

	this.app=_app;
	this.express=require('express');
	this.router=this.express.Router();
	var self=this;
	//console.dir(this.app);

	//_app.set('layout','layouts/layoutMainPage.ejs');
	
	//______________________________VISITOR
	this.router.get('/', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.indexPreRender(req,_app,function(){
				res.render('index');
		})
	  
	});
	this.router.get('/terms', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.termsPreRender(req,_app,function(){
				res.render('terms');
		})
	  
	});

	this.router.get('/faq', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.faqPreRender(req,_app,function(){
				res.render('faq');
		})
	  
	});

	this.router.get('/blog', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.blogPreRender(req,_app,function(){
				res.render('blog');
		})
	  
	});

	this.router.get('/toprank', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.topRankPreRender(req,_app,function(){
				res.render('toprank');
		})


	  
	});


	this.router.get('/about', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.aboutUsPreRender(req,_app,function(){
				res.render('aboutus');
		})

		
	  
	});


	this.router.get('/blogInner', function(req, res, next) {

		console.log('index was requested  ');		
		myRouter.prototype.blogInnerPreRender(req,_app,function(){
				res.render('blogInner');
		})

		
	  
	});


	this.router.get('/managerinnerpage', function(req, res, next) {

		console.log('manager InnerPage  was requested  ');		
		myRouter.prototype.managerInnerPreRender(req,_app,function(){
				console.log('rendering.....');
				res.render('managerInnerPage');
		})

		
	  
	});


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
			callback();
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
	callback();
}

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