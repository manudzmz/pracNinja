var $ = require("jquery");
//var timeago = require("timeago");
var timeElapsed = require("./time-elapsed.js");

var fechas = $('time');  // Lo dejamos fuera del bucle porque al ser estática la pagina no habra articulos nuevos
// console.log("$('time') => ", $('time'));

// console.log("fechas[1] => ", fechas[1]);
// console.log("$(fechas[1]).html() => ", $(fechas[1]).html());
// console.log("$(fechas[1]).attr('datetime') => ", $(fechas[1]).attr('datetime'));


$(document).ready(function(){
    setTimeout(function(){
	    //var x = timeElapsed.calcularTiempo("2016-08-01 17:15:50");
       // console.log("TIEMPO TRANSCURRIDO => ", x);
       for (var i = 0; i < fechas.length; i++) {
       		var fechaPost = $(fechas[i]).attr('datetime');
       		$(fechas[i]).html("");
       		$(fechas[i]).html(timeElapsed.calcularTiempo(fechaPost));
       }
    }, 1000); 
});

// $(window).load(function(){
//     setTimeout(function(){
// 	    //var x = timeElapsed.calcularTiempo("2016-08-01 17:15:50");
//        // console.log("TIEMPO TRANSCURRIDO => ", x);
//        for (var i = 0; i < fechas.length; i++) {
//        		var fechaPost = $(fechas[i]).attr('datetime');
//        		$(fechas[i]).html("");
//        		$(fechas[i]).html(timeElapsed.calcularTiempo(fechaPost));
//        }
//     }, 1000); 
// });


// 	setTimeout(function(){
//  		$("time.timeago").timeago();
// 	}, 1000); 
// });

// var date = new Date(2016, 06, 30, 17, 33, 00);


// var DURATION_IN_SECONDS = {
//   epochs: ['year', 'month', 'day', 'hour', 'minute'],
//   year:   31536000,
//   month:  2592000,
//   day:    86400,
//   hour:   3600,
//   minute: 60
// };

// function getDuration(seconds) {
//   var epoch, interval;

//   for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i++) {
//     epoch = DURATION_IN_SECONDS.epochs[i];
//     interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
//     if (interval >= 1) {
//       return { interval: interval, epoch: epoch };
//     }
//   }

// };

// function timeSince(date) {
//   var seconds = Math.floor((new Date() - new Date(date)) / 1000);
//   var duration = getDuration(seconds);
//   var suffix  = (duration.interval > 1 || duration.interval === 0) ? 's' : '';
//   return duration.interval + ' ' + duration.epoch + suffix;
// };


// setTimeout(function(){
// 		alert(timeSince('2016-07-30T17:43:50'));
// }, 5000);



// function timeAgoFromEpochTime(epoch) {
//     var secs = ((new Date()).getTime() / 1000) - epoch;
//     Math.floor(secs);
//     var minutes = secs / 60;
//     secs = Math.floor(secs % 60);
//     if (minutes < 1) {
//         return secs + (secs > 1 ? ' seconds ago' : ' second ago');
//     }
//     var hours = minutes / 60;
//     minutes = Math.floor(minutes % 60);
//     if (hours < 1) {
//         return minutes + (minutes > 1 ? ' minutes ago' : ' minute ago');
//     }
//     var days = hours / 24;
//     hours = Math.floor(hours % 24);
//     if (days < 1) {
//         return hours + (hours > 1 ? ' hours ago' : ' hour ago');
//     }
//     var weeks = days / 7;
//     days = Math.floor(days % 7);
//     if (weeks < 1) {
//         return days + (days > 1 ? ' days ago' : ' day ago');
//     }
//     var months = weeks / 4.35;
//     weeks = Math.floor(weeks % 4.35);
//     if (months < 1) {
//         return weeks + (weeks > 1 ? ' weeks ago' : ' week ago');
//     }
//     var years = months / 12;
//     months = Math.floor(months % 12);
//     if (years < 1) {
//         return months + (months > 1 ? ' months ago' : ' month ago');
//     }
//     years = Math.floor(years);
//     return years + (years > 1 ? ' years ago' : ' years ago');
// }


