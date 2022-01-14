// switch

var day = 1
var dayname
switch (day) {
    case 1:
        dayname = "Sunday";
        break
    case 2:
        dayname = "Monday";
        break
    case 3:
        dayname = "Tuesday";
        break
    case 4:
        dayname = "Wed";
        break
    case 5:
        dayname = "Thr";
        break
    case 6:
        dayname = "Friday";
        break
    case 7:
        dayname = "Sat";
        break
    default:
        dayname="invalid"
}

console.log(dayname)
