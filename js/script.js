$( document ).ready(function(){

    $( ".newsletter-signup .button" ).on( "click", function() {
        alert( "We're Not Ready For Sign-Ups...Yet." );
    });

    $('.readless').hide();

    $('.readmore').click(function(){
        $('#show-on-click').slideDown();
        $('.readmore').hide();
        $('.readless').show();
        event.preventDefault();
    });

    $('.readless').click(function(){
        $('#show-on-click').slideUp();
        $('.readless').hide();
        $('.readmore').show();
        event.preventDefault();
    });
    
    $('.learnmore').click(function(){
        $('#learnmoretext').slideDown();
        $('.learnmore').hide();
        event.preventDefault();
    });
});

// function toggleHidden(){
// 	$('.hidden').toggle();
// }

// $('.readmore').click(toggleHidden);