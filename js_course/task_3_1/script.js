const n = 10;

function createTable(n, bgcolor, mainColor, size, condition) {
  document.write("<table>");
  for (let y = 0; y < n; y++) {
    document.write("<tr>");
    for (let x = 0; x < n; x++) {
      const color = condition(x, y, n) ? mainColor : bgcolor;
      document.write(
        "<td bgcolor='" +
          color +
          "' width='" +
          size +
          "' height='" +
          size +
          "'></td>"
      );
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

createTable(n, "aqua", "darkblue", 30, (x, y, n) => x + y >= n - 2);

createTable(n, "violet", "lime", 30, (x, y, n) => (x + y + 2) % 4 == 0);
