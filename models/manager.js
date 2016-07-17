var mongoose=require('mongoose');

var rating=mongoose.model('rating',{
		userID			:String,  //  Person  who  voted

		rateDate        :String,

		recognition		:String,
		autonomy		:String,
		expectation		:String,
		mentorship		:String,
		reward			:String,

		pros			:String,
		cons			:String,
	});

module.exports=mongoose.model('manager',{
	userID			:String,
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
	rating 		:[rating]

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