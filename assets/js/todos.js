$("ul").on("click", "li", function(){
    // if ($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         color:"black",
    //         textDecoration: "none"
    //     })
    // }
    // else{
    //     $(this).css({
            
    //     })
    // }
    $(this).toggleClass("completed");
})


$("ul").on("click","span",function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove()});
    event.stopPropagation();
})


$("input[type='text']").keypress(function(){
    if (event.which === 13){
        var text = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> "+text+"</li>");
    } 
})


$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})