//= require jquery
//= require jquery.countdown
//= require modernizr.custom
//= require core/deck.core
//= require extensions/hash/deck.hash
//= require bootstrap
//= require_self

$(document).keyup(function (e) {
    if (e.keyCode == 27) {
        $('.exit-presentation')[0].click();
    }
});

$(function () {
    $("[data-countdown-date]").each(function () {
        var secondsSinceEpoch = parseInt($(this).data('countdown-date'), 10);
        $(this).countdown({
            until: new Date(secondsSinceEpoch),
            layout: '{desc} {hn}:{mnn}:{snn}',
            description: 'in',
            expiryText: 'starts NOW!'
        });
    });
});
