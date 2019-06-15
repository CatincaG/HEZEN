/*INSTAGRAM GALERY*/

$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        //https://codeofaninja.com/tools/find-instagram-user-id
        userId: '1190810834',
        limit: 12,
        resolution: 'standard_resolution',
        //instagram.pixelunion
        accessToken: '1190810834.1677ed0.6946583e5ffd469f9dfab8ee12f1c8b0',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});
