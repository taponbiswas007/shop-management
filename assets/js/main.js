$(document).ready(function() {
    $(".profile-details-downarrow").click(function(){
        $(".user-profile-detalis-area").slideToggle();
        $(".profile-details-downarrow").toggleClass("rotated");
        });
    
});