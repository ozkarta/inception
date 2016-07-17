var mongoose = require('mongoose');
 
module.exports = mongoose.model('User',{

    
    facebook         : {
        id           : String,
        access_token : String,
        email        : String,
        displayName  : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        displayName  : String
    },
    linkedin		 :{
    	id			:String,
    	displayName :String
    }

});


