var DateFormatter = {

/* Example
getMonthYear: function(date){
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return month + '/' + year; //return "9/2017
}

//bottom of DateFormatting.js
var getMonthYear = DateFormatter.getMonthYear(new Date());
console.log('Get Month Year ' + getMonthYear);
*/

//returns returns a the date's time with hours, minutes and AM or PM  
getShortTime: function(date){
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var temp = (hour > 12) ? ' PM' : ' AM';
    return hours + ':' +  minutes + temp;
},
//returns a the date's time with hours, minutes, seconds and AM or PM getLongTime
getLongTime: function(date){
    var hours = date.gethours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var temp = (hours > 12) ? ' PM' : ' AM';
    return hours + ", " + minutes + ", " + seconds + temp; 
},
//returns the date in the following format month/day/year getShortDate
getShortDate: function(date){
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    return month + "/" + day + "/" + year;
},
//returns the date in the following format Month Day, Year - getLongDate
getLongDate: function(date){
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    return month + " " + day + ", " + year;
},

//returns the date in the following format month/day/year hour:minutes AM|PM - getShortDateTime
getShortDateTime: function(date){
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var temp = (hour > 12) ? ' PM' : ' AM';
    return month + "/" + day + "/" + year + " " + hour + ":" + minutes + temp;
},

//returns the date in the following format- Month Day, Year hour:minutes AM|PM
getLongDateTime: function(date){
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var temp = (hour > 12) ? ' PM' : ' AM';
    return month + " " + day + ", " + year + " " + hour + ":" + minutes + temp;
},

//returns the date in the following format- Day of the week, Month Day, Year hour:minutes AM|PM
getExtendedDateTime: function(date){
    var day = date.getDay();
    var month = date.getMonth();
    var date = date.getDate();
    var year = date.getFullYear();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var temp = (hour > 12) ? ' PM' : ' AM';
    return day + " " + month + " " + date + ", " + year + " " + hour + ":" + minutes + temp;
}}

//data for console.log
var date = new Date();
console.log(DateFormatter.getShortTime(date)),
console.log(DateFormatter.getLongTime(date)),
console.log(DateFormatter.getShortDate(date)),
console.log(DateFormatter.getLongDate(date)),
console.log(DateFormatter.getShortDateTime(date)),
console.log(DateFormatter.getLongDateTime(date)),
console.log(DateFormatter.getExtendedDateTime(date))
