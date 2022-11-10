var hour = parseInt(prompt("Полное количество часов"));
var minute = parseInt(prompt("Полное количество минут"));

var maxHour = 23;
var maxMinute = 59;

if (minute < maxMinute) minute++;
else {
  minute = 0;

  if (hour < maxHour) hour++;
  else hour = 0;
}

var strHour = "" + hour;
var strMinute = "" + minute;

if (strHour.length == 1) strHour = "0" + strHour;
if (strMinute.length == 1) strMinute = "0" + strMinute;

alert("Время через минуту: " + strHour + ":" + strMinute);
