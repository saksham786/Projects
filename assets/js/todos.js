// checking off specific todos by clicking
$("ul").on("click","li",function(){
    // if($(this).css("color")=== "rgb(128, 128, 128)"){
    //     $(this).css({
    //         "color": "black",
    //         textDecoration: "none"
    //     });
    // }
    // else{
    //     $(this).css({
    //         "color": "gray",
    //         "text-decoration": "line-through"
    //     });
    // }

    $(this).toggleClass("completed");
});

// click on X to delete the Todo
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();    
});

$("input[type='text']").keypress(function(event){
    if(event.which===13){
        var todoText= $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText +"</li>");
    }
});

$(".fa-pencil-alt").click(function(){
    $("input").fadeToggle();
});