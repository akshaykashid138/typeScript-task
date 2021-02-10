var check = function (n) {
    if (n % 4 == 0 || n % 400 == 0 || n % 100 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(check(2024));
