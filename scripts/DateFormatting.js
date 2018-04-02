var DateFormatter = {}
debugger

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
getShortTime: function(){
    var hour = time.getHours();
    var minutes = time.getMinutes();
    return hour + '/' +  minutes;
}
var getShortTime = DateFormatter.getShortTime(new Date());
console.log('Get Short Time ' + getShortTime);


//returns a the date's time with hours, minutes, seconds and AM or PM getLongTime
getLongTime: function(date){
    var hours = time.gethours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return hours + ", " + minutes + ", " + seconds; 
}
var getLongTime = DateFormatter.getLongTime(new Date());
console.log('Get Long Time ' + getLongTime);


//returns the date in the following format month/day/year getShortDate
getShortDate: function(date){
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    return month + "/ " + day + "/ " + year;
}
var getShortDate = DateFormatter.getShortDate(new Date());
console.log('Get Short Date ' + getShortDate);


//returns the date in the following format Month Day, Year - getLongDate
getLongDate: function(date){
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    return month + " " + day + ", " + year;
}
var getLongDate = DateFormatter.getLongDate(new Date());
console.log('Get Long Date ' + getLongDate);

//returns the date in the following format month/day/year hour:minutes AM|PM - getShortDateTime
getShortDateTime: function(date){
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    return month + "/" + day + "/" + year + " " + hour + ":" + minutes;
}
var getLongDate = DateFormatter.getShortDateTime(new Date());
console.log('Get Short Date Time ' + getShortDateTime);

//returns the date in the following format- Month Day, Year hour:minutes AM|PM
getLongDateTime: function(date){
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    return month + " " + day + ", " + year + " " + hour + ":" + minutes;
}
var getLongDateTime = DateFormatter.getLongDateTime(new Date());
console.log('Get Long Date Time ' + getLongDateTime);

//returns the date in the following format- Day of the week, Month Day, Year hour:minutes AM|PM
getExtendedDateTime: function(date){
    var day = date.getDay();
    var month = date.getMonth();
    var date = date.getDate();
    var year = date.getFullYear();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    return day + " " + month + " " + date + ", " + year + " " + hour + ":" + minutes;
}
var getExtendedDateTime = DateFormatter.getExtendedDateTime(new Date());
console.log('Get Long Date Time ' + getExtendedDateTime);


