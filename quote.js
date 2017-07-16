var quote = "";
var favQuotesArr = [];

function init(){
  generateQuote();
  changeColour();
}

function generateQuote() {
  $(document).ready(function(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $("#quoteSpace").html(a[0].content + "<p>\— " + a[0].title + "</p>");
      quote = a[0].content + "<p>-" + a[0].title + "</p>";
      console.log(a[0].content);
    });
  });
}

function displayQuote() {
    generateQuote();
    changeColour();
}

function addToFavourites(){
  if (favQuotesArr[0] != quote){
    $("#favQuotes").prepend(quote);
    favQuotesArr.unshift(quote);
  }
}
function removeColours(){
  $("body").removeClass("grad-blue").removeClass("grad-orange").removeClass("grad-purple");
}
function changeColour(){
  //change background colour or gradient
  $(document).ready(function(){
    var random = Math.floor((Math.random() * 3) + 1);
    removeColours();
    switch(random){
      case 1:
        $("body").addClass("grad-purple");
        break;
      case 2:
        $("body").addClass("grad-blue");
        break;
      case 3:
        $("body").addClass("grad-orange");
        break;
    }
  });
}
$(document).ready(function(){
  $('body').keyup(function(e){
   if(e.keyCode == 32){
       // user has pressed space
       displayQuote();
   }
 });
});
init();
