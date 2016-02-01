$(document).ready(function() { 

    $(function($){
        var addToAll = false;
        var gallery = false;
        var titlePosition = 'inside';
        $(addToAll ? 'img' : 'img.fancybox').each(function(){
            var $this = $(this);
            var title = $this.attr('title');
            var src = $this.attr('data-big') || $this.attr('src');
            var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
            $this.wrap(a);
        });
        if (gallery)
            $('a.fancybox').attr('rel', 'fancyboxgallery');
        $('a.fancybox').fancybox({
            titlePosition: titlePosition
        });
    });(jQuery);

    // $.noConflict();
    $("#spring15").hide();

    $(".season").click(function(e){ 
        e.preventDefault();
        var url =  $(this).attr('href'); 
        $("#projects>div").not(document.getElementById(url)).fadeOut(1000);
        $("#" + url).fadeIn(2000);
     });(jQuery);

    $('.slide').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        return false;
    });(jQuery);

    

});