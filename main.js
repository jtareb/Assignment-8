$('.boxOne').on('click', function () {
    $('.boxOnePara').toggleClass('boxOnePara-active');
    $('.boxTwoPara').removeClass('boxTwoPara-active');
    $('.boxThreePara').removeClass('boxThreePara-active');
});

$('.boxTwo').on('click', function () {
    $('.boxTwoPara').toggleClass('boxTwoPara-active');
    $('.boxOnePara').removeClass('boxOnePara-active');
    $('.boxThreePara').removeClass('boxThreePara-active');
});

$('.boxThree').on('click', function (){
    $('.boxThreePara').toggleClass('boxThreePara-active');
    $('.boxOnePara').removeClass('boxOnePara-active');
    $('.boxTwoPara').removeClass('boxTwoPara-active');

});