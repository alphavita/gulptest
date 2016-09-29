;$(function (){
    $('.panel__toggle').on('click', function () {
        console.log('p');
        if (!$(this).parent().parent().hasClass('panel__active')) {
            $('.accordion__panel').removeClass('panel__active');
            $('.panel__toggle').html('+');
            $(this).parent().parent().addClass('panel__active')
            $(this).html('-');
            var descBlocks = $('.panel__description');
            descBlocks.slideUp();
            $(this).parent().next().slideDown();
        } else {
            $(this).parent().parent().removeClass('panel__active');
            $(this).html('+');
            $(this).parent().next().slideUp();
        }
    });





    $('.panel__description').hide();
    $('.panel__active').find('.panel__description').show();
});

