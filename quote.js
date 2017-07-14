var quote = "";
var favQuotesArr = [];

function init(){
  generateQuote();
}

function generateQuote() {
  $(document).ready(function(){
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $("#quoteSpace").html(a[0].content + "<p>— " + a[0].title + "</p>");
      quote = a[0].content + "<p>-" + a[0].title + "</p>";
    });
  });
}

function displayQuote() {
    generateQuote();
    changeColour();
}

function addToFavourites(){
  if (favQuotesArr[0] != quote){
    $("#favQuotes").append(quote);
    favQuotesArr.unshift(quote);
  }
}
function changeColour(){
  //change background colour or gradient
  $(document).ready(function(){
    var random = Math.floor((Math.random() * 3) + 1);
    switch(random){
      case 1:
        $("body").removeClass("grad-blue").removeClass("grad-orange").addClass("grad-purple");
        break;
      case 2:
        $("body").removeClass("grad-purple").removeClass("grad-orange").addClass("grad-blue");
        break;
      case 3:
        $("body").removeClass("grad-purple").removeClass("grad-blue").addClass("grad-orange");
        break;
    }
  });
}

init();
