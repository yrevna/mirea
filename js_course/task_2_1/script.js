var x = 5;
var y = 2;
var z = 600;

if(x == y && x == z && y == z){
    document.write('Числа равны');
} else {
    var maxNum = x;

    if(maxNum < y)
    maxNum = y;
    
    if(maxNum < z)
    maxNum = z;
    
    document.write('Наибольшее число: ' + maxNum);
}
