$(document).ready(function(){
    $( "a.scrollLink" ).click(function( event ) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 700);
    });
});

$.facebox.settings.closeImage = 'images/closelabel.png'
$.facebox.settings.loadingImage = 'images/loading.gif'

jQuery(document).ready(function($) {
  $('a[rel*=facebox]').facebox()
});
