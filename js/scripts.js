
var pigLatin = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i=0; i < word.length; i++) {
    if ((vowels.indexOf(word[i])) != -1) {
      if ((word[i] === "u") && (word[i-1] === "q")) {
        var slice_here = i + 1;
      } else {
        var slice_here = i;
      }
      var first_half = word.slice(0, slice_here);
      var second_half = word.slice(slice_here, word.length);
      var result = second_half + first_half + 'ay';
      return result;
    }
  }
}

$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    var word = $("input#word").val();
    var result = pigLatin(word);

    $(".word").text(word);
    $(".result").text(result);

    $("#result").show();
    event.preventDefault();

  });
});
