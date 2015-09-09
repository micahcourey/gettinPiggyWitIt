
var pigLatin = function(input) {

  var word = input.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i=0; i < vowels.length; i++) {
    if (vowels[i] === word[0]) {
      var result = word.join('') + 'ay';
      return result;
    } else {
        for (var i=0; i < vowels.length; i++) {
          if (vowels[i] !== word[0]) {
            var wordslice = word + word.shift();
            var result = wordslice.replace(/,/g, '') + 'ay';
          }

            return result;
          }
        }
      }
    }



// if ((input[0] == "a") || (input[0] == "e") || (input[0] == "i") || (input[0] == "u") || (input[0] == "o")) {
//
//   var result = input + ay;
//   return result;
// } else if ((input[0] !== "a") || (input[0] !== "e") || (input[0] !== "i") || (input[0] !== "u") || (input[0] !== "o")) {
//     var first = input.slice(1);
//     var second = input[0];
//     var result =  first + second + ay;
