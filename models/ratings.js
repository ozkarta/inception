var mongoose=require('mongoose');

module.exports=mongoose.model('rating',{
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