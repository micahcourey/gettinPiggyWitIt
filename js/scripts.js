
var pigLatin = function(input) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i=0; i < input.length; i++) {
    if ((vowels.indexOf(input[i])) != -1) {
      var slice_here = i;
      var first_half = input.slice(0, slice_here);
      var second_half = input.slice(slice_here, input.length);
      var result = second_half + first_half + "ay";
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
