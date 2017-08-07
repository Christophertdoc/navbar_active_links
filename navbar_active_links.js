$(document).ready(function(){
    // set active class for nav
    if(window.location.pathname.length <= 1){
        $('#navbar ul li a[href="' + window.location.href + '"]').parent().addClass('nav-visited');
    }
    // all other pages
    else {
        $('#navbar ul li a[href*="' + window.location.pathname.split("/")[1] + '"]').parent().addClass('nav-visited');
    }
});
