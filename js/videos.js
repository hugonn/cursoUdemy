$(document).ready(function(){
    
    
    $(".thumbnails .item").click(function(){
        
        $("video").attr("src","mp4/"+$(this).data('video'));
    })
    
   
    
    $(".thumbnails").owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        navText: ["anterior","proximo"],
        responsive:{
            items:4
        }
    })
    
    
})