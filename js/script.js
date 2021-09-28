// WEB303 Assignment 2
// Palwinder kaur

const t = 500;

$( document ).ready(function (){
    console.log("Document Ready...");
    $( "#vprospect" ).click((e) => getDataFromPage(e, "prospect"));
    $( "#vconvert" ).click((e) => getDataFromPage(e, "convert"));
    $( "#vretain" ).click((e) => getDataFromPage(e, "retain"));
});


function getDataFromPage(e, page){
    e.preventDefault(); // Prevents redirection of the page
    let url = page + ".html";
    $.ajax({
        type: "GET",
        url: url,
        success: function (response) {
            if ($( "#solution" ).css("height") == "0px") {
                $( "#solution" ).animate({height : "toggle"}, 0, () => {
                    $( "#solution" ).html(response).animate({height : "toggle"}, t)
                });
            }
            else{
                $( "#solution" ).animate({height : "toggle"}, t, () => {
                    $( "#solution" ).html(response).animate({height : "toggle"}, t)
                });
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}