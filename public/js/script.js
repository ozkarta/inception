// $(document).ready(function() {
//     var activeButton = document.getElementsByTagName('landing-area-select button')
//     activeButton.addEventListener('click', function() {
//         console.log("asdasds");
//         // var clickedButton = e.target;
//         // clickedButton.bgColor = "#3a9fe5";
//     }, false);
//
//
//
//

// var i = 0;
// $('.main-container button').on('click', function(e){
//   e.preventDefault();
//   var clicks = $(this).data('clicks');
//   if (clicks) {
//      ocument.getElementById('abc').style.display = "block";
//   } else {
//       document.getElementById('abc').style.display = "none";
//   }
//   $(this).data("clicks", !clicks);
//
// })
//

//
// function div_show() {
//     document.getElementById('abc').style.display = "block";
// }
//
// function div_hide() {
//     document.getElementById('abc').style.display = "none";
// }

// function check_empty() {
//     if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
//         alert("Fill All Fields !");
//     } else {
//         document.getElementById('form').submit();
//         alert("Form Submitted Successfully...");
//     }
// }


// add managers shi. loadis dros forma gaizardos magalitad 100px idan width 100% amde
// $(document).ready(function() {
//     if (window.location.pathname == '/addmanagers.html') {
//         console.log("you are on add managers page");
//     } else {
//         console.log("you are not on add managers page");
//     }
//
// });




window.onload = function(e) {
    alert('loaded script.js');
    /*BLOG --- hover effect on Read More glyphicon(arrow) ---- Start*/
    // var $blogButton = $('.read-more');
    // var $readMoreArrow = $(".glyphicon-chevron-right");

    // $blogButton.hover(function() {
    //     $readMoreArrow.css("color", "#3a9fe5");
    // })

    // $blogButton.mouseout(function() {
    //         $readMoreArrow.css("color", "#d3d3d3");
    //     })
    //     /*BLOG --- hover effect on Read More glyphicon(arrow) ---- End*/

    // BLOG --- Most Read and Recent posts fixed when it reaches top of the page ---- Start
    // var $window = $(window),
    //     $stickyEl = $('.posts'),
    //     elTop = $stickyEl.offset().top - 30;

    // $window.scroll(function() {
    //     $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
    // });
    // /*BLOG --- Most Read and Recent posts fixed when it reaches top of the page ---- End*/

    // /*SignIn/SignUp Pop-up ---- Start*/

    var $signUpButton = $("#sign-up");
    var $closeX = $("#close");
    var $abc = $('#abc');
    $signUpButton.click(function() {
        var container = $("#popupContact");
        container.show();
        $abc.css({
            "opacity": "0.98",
            "display": "block"
        });
        $(document).mouseup(function(e) {
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
                $abc.css({
                    "opacity": "0",
                    "display": "none"
                });
            }
        })
    });
    $closeX.click(function() {
        $abc.css("display", "none");
    });
    /*SignIn/SignUp Pop-up ---- End*/
};

