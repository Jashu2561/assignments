/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if(str1.length != str2.length){
      console.log("NA");
    }
    let lettersInTheString1 = str1.toLowerCase().split("").sort().join();
    let lettersInTheString2 = str2.toLowerCase().split("").sort().join();
  
    if(lettersInTheString1 === lettersInTheString2){
      return true;
    }
    if(lettersInTheString1 != lettersInTheString2){
      return false;
    }


}

module.exports = isAnagram;
