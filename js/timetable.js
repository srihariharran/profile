$('.pehv').click(function()
{
	 window.open('https://meet.google.com/lookup/bze7gc3rey', '_blank').focus();
});
$('.bea').click(function()
{
	 window.open('https://meet.google.com/lookup/ffbhtwffrs', '_blank').focus();
});
$('.spm').click(function()
{
	 window.open('https://meet.google.com/lookup/cgwc5k7uye', '_blank').focus();
});
$('.sqa').click(function()
{
	 window.open('https://meet.google.com/lookup/ftfrhkom2l', '_blank').focus();
});
var date=new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var m = month[date.getMonth()];

var weekday = new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
var w=weekday[date.getDay()];
$('#date').html("<i class='fa fa-calendar'></i>&nbsp;"+date.getDate()+" "+m+" "+date.getFullYear()+" "+w);

// $('#date').html(d);
setInterval(function() {
    var date=new Date();
    $('#time').html("<i class='fa fa-clock-o'></i>&nbsp;"+date.getHours() + ":" + date.getMinutes() +":" + date.getSeconds());
}, 500);


if(w==weekday[1])
{
	if(date.getHours()==9 && (date.getMinutes()>=0 && date.getMinutes()<=45))
	{
		window.open('https://meet.google.com/lookup/cgwc5k7uye', '_blank').focus();
	}
	else if((date.getHours()==10 && (date.getMinutes()>=0 && date.getMinutes()<=45)) || (date.getHours()==12 && (date.getMinutes()>=15 && date.getMinutes()<=59)))
	{
		window.open('https://meet.google.com/lookup/ffbhtwffrs', '_blank').focus();
	}
	else if(date.getHours()==11 && (date.getMinutes()>=15 && date.getMinutes()<=59))
	{
		window.open('https://meet.google.com/lookup/bze7gc3rey', '_blank').focus();
	}
	else if(date.getHours()==14 && (date.getMinutes()>=15 && date.getMinutes()<=59))
	{
		window.open('https://meet.google.com/lookup/ftfrhkom2l', '_blank').focus();
	}
}
else if(w==weekday[2])
{
	if(date.getHours()==9 && (date.getMinutes()>=0 && date.getMinutes()<=45))
	{
		window.open('https://meet.google.com/lookup/ftfrhkom2l', '_blank').focus();
	}
	else if((date.getHours()==10 && (date.getMinutes()>=0 && date.getMinutes()<=45)) || (date.getHours()==14 && (date.getMinutes()>=15 && date.getMinutes()<=59)))
	{
		window.open('https://meet.google.com/lookup/bze7gc3rey', '_blank').focus();
	}
	else if(date.getHours()==11 && (date.getMinutes()>=15 && date.getMinutes()<=59))
	{
		window.open('https://meet.google.com/lookup/cgwc5k7uye', '_blank').focus();
	}
	else if(date.getHours()==12 && (date.getMinutes()>=15 && date.getMinutes()<=59))
	{
		window.open('https://meet.google.com/lookup/ffbhtwffrs', '_blank').focus();
	}
}
else if(w==weekday[3] || w==weekday[6])
{
	if(date.getHours()==9 && (date.getMinutes()>=0 && date.getMinutes()<=45))
	{
		window.open('https://meet.google.com/lookup/bze7gc3rey', '_blank').focus();
	}
	else if((date.getHours()==10 && (date.getMinutes()>=0 && date.getMinutes()<=45)) || (date.getHours()==12 && (date.getMinutes()>=15 && date.getMinutes()<=59)))
	{
		window.open('https://meet.google.com/lookup/ftfrhkom2l', '_blank').focus();
	}
	else if(date.getHours()==11 && (date.getMinutes()>=15 && date.getMinutes()<=59))
	{
		window.open('https://meet.google.com/lookup/ffbhtwffrs', '_blank').focus();
	}
	else if(date.getHours()==14	 && (date.getMinutes()>=15 && date.getMinutes()<=59))
	{
		window.open('https://meet.google.com/lookup/cgwc5k7uye', '_blank').focus();
	}
}
else if(w==weekday[4])
{
	if((date.getHours()==9 && (date.getMinutes()>=0 && date.getMinutes()<=45)) || (date.getHours()==12 && (date.getMinutes()>=15 && date.getMinutes()<=59)) )
	{
		window.open('https://meet.google.com/lookup/cgwc5k7uye', '_blank').focus();
	}
	else if((date.getHours()==10 && (date.getMinutes()>=0 && date.getMinutes()<=45)))
	{
		window.open('https://meet.google.com/lookup/ftfrhkom2l', '_blank').focus();
	}
	else if(date.getHours()==11 && (date.getMinutes()>=15 && date.getMinutes()<=59))
	{
		window.open('https://meet.google.com/lookup/bze7gc3rey', '_blank').focus();
	}
	else if(date.getHours()==14	 && (date.getMinutes()>=15 && date.getMinutes()<=59))
	{
		window.open('https://meet.google.com/lookup/ffbhtwffrs', '_blank').focus();
	}
}
else if(w==weekday[5])
{
	if((date.getHours()==9 && (date.getMinutes()>=0 && date.getMinutes()<=45)))
	{
		window.open('https://meet.google.com/lookup/ftfrhkom2l', '_blank').focus();
	}
	else if((date.getHours()==10 && (date.getMinutes()>=0 && date.getMinutes()<=45)))
	{
		window.open('https://meet.google.com/lookup/bze7gc3rey', '_blank').focus();
	}
	else if(date.getHours()==11 && (date.getMinutes()>=15 && date.getMinutes()<=59))
	{
		window.open('https://meet.google.com/lookup/ffbhtwffrs', '_blank').focus();
	}
	else if(date.getHours()==12	 && (date.getMinutes()>=15 && date.getMinutes()<=59))
	{
		window.open('https://meet.google.com/lookup/cgwc5k7uye', '_blank').focus();
	}
}
setInterval(function() {
    if((date.getHours()==9 && date.getMinutes()==0 && date.getSeconds()==0) || (date.getHours()==10 && date.getMinutes()==0 && date.getSeconds()==0) || (date.getHours()==11 && date.getMinutes()==15 && date.getSeconds()==0) || (date.getHours()==12 && date.getMinutes()==15 && date.getSeconds()==0) || (date.getHours()==14 && date.getMinutes()==15 && date.getSeconds()==0))
	{
		window.location.reload();
	}
}, 500);

$(document).ready(function () {
   $("body").on("contextmenu",function(e){
     return false;
   });

});
document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }     
    if(e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
 }
