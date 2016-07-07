$(document).ready(function() {
    var $hiddenLi = $(".blog-inner-social").slice(4);
    var $social = $('.more');
    var i = 0;
    var $toggleText = $(".more a");
    var bool = true;
    $social.click(function(e) {
        e.preventDefault();
        if (bool) {
            $toggleText.hide();
            $hiddenLi.slideToggle(10);
            $toggleText.text("Less...");
            $toggleText.fadeIn('slow');
            bool = false;
        } else {
            $hiddenLi.fadeOut('slow');
            $toggleText.text("More...");
            bool = true;
        }


    });
});
