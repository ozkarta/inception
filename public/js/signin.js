window.onload=function() {
    
    /*SignIn/SignUp Pop-up ---- Start*/
    var $signUpButton = $("#sign-up");
    var $closeX = $("#close");
    var $abc = $('#abc');
    $signUpButton.click(function() {
        var container = $("#popupContact");
        container.show();
        $abc.css({"opacity":"0.98","display": "block"});
        $(document).mouseup(function(e) {
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
                $abc.css({"opacity":"0","display": "none"});
            }
        })
    });
    $closeX.click(function() {
        $abc.css("display","none");
    });

   
};
