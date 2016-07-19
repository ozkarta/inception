var mongoose=require('mongoose');



module.exports=mongoose.model('manager',{
	managerID		:String,
	fullName		:String,
	//managerTitle	:String,  //  addmanager
	possition		:String,
	department		:String,  //
	currentCompany 	:String,
	email			:String,
	workMail		:String,
	linkedinURL		:String,


	imageURL	:String,
	
	//workHistory	:[workHistory],
	rating 		:[]

});




var workHistory=mongoose.model('workHistory',{
	startDate	:String,
	endDate		:String,
	companyName	:String,
	possition	:String,
	department	:String
})

//module.exports=managerMain;
//module.exports.managerPersonal=managerPersonal;
//module.exports.workHistory=workHistory;