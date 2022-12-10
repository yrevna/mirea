function check_number(num_str) {
  const ans = "Число " + num_str + " - ";
  const num = parseInt(num_str);
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      alert(ans + "не относится к простым.");
      return;
    }
  }
  alert(ans + 'простое.');
}
