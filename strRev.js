var strRev = function (str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray.toString();
};
console.log(strRev('akshay'));
