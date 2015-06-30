function getAverage() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i - 0] = arguments[_i];
    }
    var total = 0;
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    var average = total / count;
    return 'The average is ' + average;
}
var result = getAverage(4, 6); // 'The average is 5'
