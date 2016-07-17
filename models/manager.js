var mongoose=require('mongoose');

var managerMain=mongoose.model('manager',{
	fullName		:String,
	managerTitle	:String,  //  addmanager
	department		:String,  //
	currentCompany 	:String,
	email			:String,
	linkedinURL		:String,


	imageURL	:String,
	
	//workHistory	:[workHistory],
	rating 		:[rating]

});


var managerRating=mongoose.model({
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

var workHistory=mongoose.model({
	startDate	:String,
	endDate		:String,
	companyName	:String,
	possition	:String,
	department	:String
})

module.exports.managerMain=managerMain;
module.exports.managerPersonal=managerPersonal;
module.exports.workHistory=workHistory;