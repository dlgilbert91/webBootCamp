function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        var fac = num;
        for (num -= 1; num > 0; num--) {
            fac *= num;
        }
        return fac;
    }
}

function kebabToSnake(str) {
    return str.replace(/-/g, "_");
}