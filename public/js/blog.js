window.onload = function(e) {
    if((e.target.location.pathname==='/blog' )  ){
         console.log(e.target.location.pathname+'    123123')
        if(e.target.location.pathname==='/blog'){


            console.dir(e);
            /*BLOG --- hover effect on Read More glyphicon(arrow) ---- Start*/
            var $blogButton = $('.read-more');
            var $readMoreArrow = $(".glyphicon-chevron-right");

             $blogButton.hover(function(e) {
            var $target = $(e.target);
            $target.children(".glyphicon").css("color", "#3a9fe5");
        })

        $blogButton.mouseout(function(e) {
            var $target = $(e.target);
            $target.children(".glyphicon").css("color", "#d3d3d3");
            })
            /*BLOG --- hover effect on Read More glyphicon(arrow) ---- End*/

            /*BLOG --- Most Read and Recent posts fixed when it reaches top of the page ---- Start*/
            var $window = $(window),
                $stickyEl = $('.posts'),
                elTop = ($stickyEl.offset().top) - 30;

            $window.scroll(function() {
                $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
            });
            /*BLOG --- Most Read and Recent posts fixed when it reaches top of the page ---- End*/
        }
    }
   
};
