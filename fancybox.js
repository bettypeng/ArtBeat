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

    $(".season").click(function(e){ 
        console.log("HI");
        e.preventDefault();
        var url = $(this).attr('href'); //get the link you want to load data from
        // $.ajax({ 
        //  type: 'GET',
        //  url: url,
        //  success: function(data) { 
            $("#projects").load(url); 
     //    } 
     //   }); 
     });(jQuery);

});