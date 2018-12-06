$( document ).ready(function() {
    console.log( "document loaded" );
    let currentYear = new Date().getFullYear();
    $('.copyright').text(currentYear);
});