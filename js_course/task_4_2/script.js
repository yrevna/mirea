function createTable(n, size, condition) {
  document.write("<table>");
  for (let y = 0; y < n; y++) {
    document.write("<tr>");
    for (let x = 0; x < n; x++) {
      document.write(
        "<td width='" +
          size +
          "' height='" +
          size +
          "'>" +
          condition(x, y, n) +
          "</td>"
      );
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

function matrica() {
  createTable(10, 30, (x, y, n) => (x == y ? 1 : 0));
}
