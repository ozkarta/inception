var mongoose=require('mongoose');

module.exports=mongoose.model('company',{
	id		:Number,
	name	:String,	
});