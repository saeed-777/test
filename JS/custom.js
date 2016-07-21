$(document).ready(function(){
    
    $(".button-grn").mouseover(function(){
        $(this).css("background-color","#7DC855");
    });
    $(".button-grn").mouseleave(function(){
        $(this).css("background-color", "");
    });
    
    $(".button").click(function(){
        var btn_name = $(this).attr("value");
        alert("You clicked " + btn_name);
    });
    
    
    
    $(".button").click(function(){
        $(this).fadeOut().fadeIn();
        
        
    });
    
    
});