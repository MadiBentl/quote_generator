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
}

function addToFavourites(){
  if (favQuotesArr[0] != quote){
    $("#favQuotes").append(quote);
    favQuotesArr.unshift(quote);
  }
}

init();
