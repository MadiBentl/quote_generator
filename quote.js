$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
  $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
});
function generateQuote() = {

}

function displayQuote() = {
  $(document).ready(function(){
    ("#quoteSpace").empty().append(generateQuote());
  });
}
