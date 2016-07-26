var mongoose=require('mongoose');


module.exports=mongoose.model('blog',{
	blogID			:String,	
	effDate			:String,
	blogImageURL	:String,
	blogTitle		:String,
	blogInnerHTML	:String,
	viewCounter		:String,
	comments		:[]
});