$("#quote").empty();
var newColor = getRandomColor();
$("body").css("background", newColor);
$("#new-quote").css("background", newColor);
$(".fa-twitter-square").css("color", newColor);
var cb = Math.round(new Date().getTime() / 1000);
$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + cb, function(a) {
  $("#quote").html(a[0].content);
  $("#author").html(a[0].title);
  var quote = "\"";
  quote += a[0].content + "\"";
  quote = quote.replace(/<(?:.|\n)*?>/gm, '');
  quote = quote.replace(/\s+/g, ' ');
  quote = quote.replace('. "', '."');
  quote = quote + ' - ' + a[0].title;
  $("#ghost").html(quote);
  quote = $("#ghost").html();
  quote = quote.replace(';', ",");
  var _href = "https://twitter.com/intent/tweet?text=";
  $("a#twitter").attr("href", _href + quote);
});

$("#new-quote").on("click", function(e) {
  e.preventDefault();
  $.ajax({
    url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(a) {
      $("#quote").html(a[0].content);
      $("#author").html(a[0].title);
      newColor = getRandomColor();
      $("body").css("background", newColor);
      $("#new-quote").css("background", newColor);
      $(".fa-twitter-square").css("color", newColor);
      var newQuote = "\"";
      newQuote += a[0].content + "\"";
      newQuote = newQuote.replace(/<(?:.|\n)*?>/gm, '');
      newQuote = newQuote.replace(/\s+/g, ' ');
      newQuote = newQuote.replace('. "', '."');
      newQuote = newQuote + ' - ' + a[0].title + ' #quotes';
      $("#ghost").html(newQuote);
      newQuote = $("#ghost").html();
      newQuote = newQuote.replace(';', ",");
      var _href = "https://twitter.com/intent/tweet?text=";
      $("a#twitter").attr("href", _href + newQuote);
    },
    cache: false
  });
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}