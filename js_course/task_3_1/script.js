var n=10;
document.write("<table>");
for (var y=0; y<n; y++){
    document.write("<tr>");
    for (var x=0; x<n; x++){
        let color='aqua';
        if (x+y>=n-2) color='darkblue';
        document.write("<td bgcolor='"+ color +"' width='30' height='30'></td>");
    }
    document.write("</tr>");
}
document.write("</table>");

document.write("<table>");
for (var y=0; y<n; y++){
    document.write("<tr>");
    for (var x=0; x<n; x++){
        let color='violet';
        if ((x+y+2)%4==0) color='lime';
        document.write("<td bgcolor='"+ color +"' width='30' height='30'></td>");
    }
    document.write("</tr>");
}
document.write("</table>");