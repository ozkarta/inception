$(document).ready(function() {
    /*SignIn/SignUp Pop-up ---- Start*/
    var $viewProfile = $(".view-profile");
    var $closeX = $("#rate-modal-close");
    var $rateArea = $('#rate-modal');
    $viewProfile.click(function() {
        var container = $("#popupRate");
        container.show();
        $rateArea.css({"opacity":"0.98","display": "block"});
        $(document).mouseup(function(e) {
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
                $rateArea.css({"opacity":"0","display": "none"});
            }
        })
    });
    $closeX.click(function() {
        $rateArea.css("display","none");
    });
    /*Feedback vaskvlavebis gayvitleba --- START*/

    /*Feedback vaskvlavebis gayvitleba --- END*/


});
