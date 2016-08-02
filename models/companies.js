var mongoose=require('mongoose');

module.exports=mongoose.model('company',{
	id		:String,
	name	:String,	
});