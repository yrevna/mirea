function calculate() {
    const x=parseInt(document.getElementById('num1').value||'0');
    const y=parseInt(document.getElementById('num2').value||'0');
    const z=document.getElementById('ans');
    // console.log(x, typeof x);
    if (document.getElementById('check1').checked) {
        z.value=x+y;
        return;
    }
    if (document.getElementById('check2').checked) {
        z.value=x-y;
        return;
    }
    if (document.getElementById('check3').checked) {
        z.value=x*y;
        return;
    }

}

function clearInput() {
    document.getElementById('num1').value='';
    document.getElementById('num2').value='';
    document.getElementById('ans').value='';
    document.getElementById('check1').checked=false;
    document.getElementById('check2').checked=false;
    document.getElementById('check3').checked=false;
}