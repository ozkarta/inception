var mongoose=require('mongoose');

module.exports=mongoose.model('',{
	commentID		:String,
	userID			:String,
	userName		:String,
	mail			:String,
	effDate			:String,
	comment			:String,
	reply			:[]

});