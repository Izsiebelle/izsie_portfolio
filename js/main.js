$(document).ready(function(){

    let $btns = $('.button-group button');

    $btns.click(function(e){
        $('.button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });
        return false;
    })

    $('.button-group #btn-all').trigger('click');

    // stick nav bar

    let header_height = $('.header_area').height() + 50;

    function stickyNav() {
        if($('.header_area').length){
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if(scroll >= header_height){
                    $('.main-menu').addClass('navbar-fixed');
                }else{
                    $('.main-menu').removeClass('navbar-fixed');
                }
            })
        }
    }

    stickyNav();

});