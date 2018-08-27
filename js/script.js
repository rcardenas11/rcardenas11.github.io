$(".agrandarIcono").hover(grande, original);

function grande() {
    $(this).css({height: "+=20%", width: "+=20%"});
}
function original() {
    $(this).css({height: "", width: ""});
}




