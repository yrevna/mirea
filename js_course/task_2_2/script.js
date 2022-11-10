var lastName = prompt("Фамилия");
var firstName = prompt("Имя");
var fatherName = prompt("Отчество");

if(confirm(lastName + " " + firstName + " " + fatherName + "\nВсё верно?")) alert("Здравствуйте, " + lastName + " " + firstName + " " + fatherName)
else alert("Ошибка, перезагрузите страницу"); 
