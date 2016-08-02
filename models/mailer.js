var mailer=require("nodemailer");

var smtpConfig = 'smtps://uncoveredboss1@gmail.com:12qwert12@smtp.gmail.com';


function sendMail(mailTo,mailSubject,cc,mailBody){
	var transporter = mailer.createTransport(smtpConfig);

	var mailOptions = {
	    from: '"Uncovered Boss Administration" <uncoveredboss1@gmail.com>', // sender address 
	    to: mailTo, // list of receivers 
	    subject: mailSubject, // Subject line 
	    //text: mailBody  // plaintext body 
	    html: mailBody // html body 
	};
	transporter.sendMail(mailOptions,function(err,info){
		if(err){
			console.log(err);
		}else{
			console.log('mail was send succesfully:  '+info.response);
		}
	})
}	



module.exports.sendMail=sendMail;