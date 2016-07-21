window.onload = function(e) {
        //console.dir(e);
        console.log(e.target.location.pathname)
        if((e.target.location.pathname==='/manager' || e.target.location.pathname==='/user/managerinnerpage') & document.getElementById('mustDrowVariable').value=='Y'){
            console.log('mushaobs');
            var bar = new ProgressBar.Circle(independence, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#aaa',
                    width: 1
                },
                to: {
                    color: '#333',
                    width: 4
                },
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 5);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

            console.log(document.getElementById('autonomy_variable').value);
            bar.animate(document.getElementById('autonomy_variable').value); // Number from 0.0 to 1.0



            var bar = new ProgressBar.Circle(expectation, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#aaa',
                    width: 1
                },
                to: {
                    color: '#333',
                    width: 4
                },
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 5);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

           bar.animate(document.getElementById('expectation_variable').value); // Number from 0.0 to 1.0



            var bar = new ProgressBar.Circle(mentor, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#aaa',
                    width: 1
                },
                to: {
                    color: '#333',
                    width: 4
                },
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 5);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

            bar.animate(document.getElementById('mentorship_variable').value); 


            var bar = new ProgressBar.Circle(reward, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#aaa',
                    width: 1
                },
                to: {
                    color: '#333',
                    width: 4
                },
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 5);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

            bar.animate(document.getElementById('reward_variable').value); 


            var bar = new ProgressBar.Circle(balance, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#aaa',
                    width: 1
                },
                to: {
                    color: '#333',
                    width: 4
                },
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 5);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

            bar.animate(document.getElementById('recognition_variable').value); 


            var bar = new ProgressBar.Circle(overall, {
                color: '#aaa',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 4,
                trailWidth: 1,
                easing: 'easeInOut',
                duration: 1400,
                text: {
                    autoStyleContainer: false
                },
                from: {
                    color: '#aaa',
                    width: 1
                },
                to: {
                    color: '#333',
                    width: 4
                },
                // Set default step function for all animate calls
                step: function(state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 5);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value);
                    }

                }
            });
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

           bar.animate(document.getElementById('overall_variable').value); 
        }

        //_____________________________BLOG_____________________________________
         if(e.target.location.pathname==='/blog' || e.target.location.pathname==='/user/blog'){


        //console.dir(e);
        /*BLOG --- hover effect on Read More glyphicon(arrow) ---- Start*/
        var $blogButton = $('.read-more');
        var $readMoreArrow = $(".glyphicon-chevron-right");

        $blogButton.hover(function() {
            $readMoreArrow.css("color", "#3a9fe5");
        })

        $blogButton.mouseout(function() {
                $readMoreArrow.css("color", "#d3d3d3");
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
};
