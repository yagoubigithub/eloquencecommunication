

$(window).resize(function(){

    if ($(window).width() < 576) {  

           // is mobile device xs
           $('#navbarNavAltMarkup').removeClass('justify-content-center')
           $('.card').removeClass('mycard')

    }     

});
$(window).resize(function(){

    if ($(window).width() >= 576) {  

           // is mobile device
           $('#navbarNavAltMarkup').removeClass('justify-content-center')
           $('.card').removeClass('mycard')
    }     

});
$(window).resize(function(){

    if ($(window).width() > 768) {  

           // // Medium devices (tablets, 768px and up)
           $('#navbarNavAltMarkup').removeClass('justify-content-center')
           $('.card').removeClass('mycard')
    }     

});
$(window).resize(function(){

    if ($(window).width() > 992) {  

           /// Large devices (desktops, 992px and up)


    }     

});
$(window).resize(function(){

    if ($(window).width() > 1200) {  

        // Extra large devices (large desktops, 1200px and up)

    }     

});