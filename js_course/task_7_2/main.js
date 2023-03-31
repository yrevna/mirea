function calculate() {
    const x=parseInt(document.getElementById('length').value||'0');
    const z=document.getElementById('ans');
    if (document.getElementById('circle').checked) {
        z.value=Math.PI*Math.pow(x,2);
        return;
    }
    if (document.getElementById('square').checked) {
        z.value=Math.pow(x,2);
        return;
    }
    alert('Вы не выбрали форму');
}

function clearInput() {
    document.getElementById('length').value='';
    document.getElementById('ans').value='';
    document.getElementById('circle').checked=false;
    document.getElementById('square').checked=false;
}

