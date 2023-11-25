$(document).ready(function() {
    $("#userDetails").click(function(){
        $(".user-profile-detalis-area").slideToggle();
        $(".profile-details-downarrow").toggleClass("rotated");
        });
    

    //buyer list and saller list changer
    $("#buyerListbtn").click(function(){
        $("#buyerList").slideToggle(1000, function() {
            updateInstructionVisibility();
        });
        $("#sallerList").hide();
    });
    
    $("#sallerListbtn").click(function(){
        $("#sallerList").slideToggle(1000, function() {
            updateInstructionVisibility();
        });
        $("#buyerList").hide();
    });
    
    function updateInstructionVisibility() {
        if ($("#buyerList").is(":visible") || $("#sallerList").is(":visible")) {
            $(".instraction-content").hide();
        } else {
            $(".instraction-content").show();
        }
    }
    
    
    
    
    
    


    //add a new buyer start
    $("#addbuyer").on('click', function() {
        // Show and slide in buyer-add-form from the right
        $('.buyer-add-form').css({"right": "-100%"}); // Reset to initial position
        $('.full-wraper-popup').fadeIn();
        
        // Show buyer-add-form as well
        $('.buyer-add-form').show().animate({"right": "0"} ,400);
    });
    $("#addbuyerClose").on('click', function() {
        // Slide out buyer-add-form to the right
        $('.buyer-add-form').animate({"right": "-100%"}, 400, function() {
            $(this).hide();
        });
        $('.full-wraper-popup').fadeOut();
    });
    //add a new buyer end

    //add a new saller start
    $("#addSaller").on('click', function() {
        // Show and slide in buyer-add-form from the right
        $('.buyer-add-form').css({"right": "-100%"}); // Reset to initial position
        $('.full-wraper-popup').fadeIn();
        
        // Show buyer-add-form as well
        $('.buyer-add-form').show().animate({"right": "0"} ,400);
    });
    $("#addsallerClose").on('click', function() {
        // Slide out buyer-add-form to the right
        $('.buyer-add-form').animate({"right": "-100%"}, 400, function() {
            $(this).hide();
        });
        $('.full-wraper-popup').fadeOut();
    });
    //add a new saller end


    //swith button area alart
    $('#switchToggle').change(function() {
        if ($(this).prop('checked')) {
          $('#status').text('ON');
        } else {
          $('#status').text('OFF');
        }
      });
});
