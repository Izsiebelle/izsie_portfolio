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
})